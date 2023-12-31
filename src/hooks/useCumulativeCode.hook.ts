import { useTypedSelectorHook } from './use-typed-selector.hook';

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelectorHook((state) => {
    const { data, order } = state.cells;

    const orderedCells = order.map((id) => data[id]);

    const showFunction = `
      import _React from 'react';
      import _ReactDOM from 'react-dom';
      var show = (value) => {
      const root =  document.querySelector('#root');
      
        if (typeof value === 'object') {
        if (value.$$typeof && value.props) {
        _ReactDOM.render(value,  root)
          } else {            
         root.innerHTML = JSON.stringify(value);
        }
        } else {
          root.innerHTML = value;
        }
      }
    `;
    const showFunctionNoOp = 'var show = () => {}';
    const cumulativeCode = [];

    for (let orderedCell of orderedCells) {
      if (orderedCell.type === 'code') {
        const functionToRun =
          orderedCell.id === cellId ? showFunction : showFunctionNoOp;
        cumulativeCode.push(functionToRun);
        cumulativeCode.push(orderedCell.content);
      }
      if (orderedCell.id === cellId) {
        break;
      }
    }
    return cumulativeCode.join('\n');
  });
};

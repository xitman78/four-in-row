import React from 'react'
import Cell from './Cell'
import './Row.css'

function isFourInRow(row) {
    let counter = 0;
    for (let val of row) {
        if (val) {
            counter++;
            if (counter === 4) {
                return true;
            }
        } else {
            counter = 0;
        }
    }
    return false;
}

const Row = ({rowData, rowIndex, onChange}) => (
    <div className={'grid-row' + (isFourInRow(rowData) ? ' four-in-row' : '')}>
                        {rowData.map((cellValue, colIndex) => (
                            <Cell key={colIndex} 
                            row={rowIndex} 
                            col={colIndex} 
                            isActive={cellValue}
                            onChange={onChange}
                            />
                        ))}
                    </div>
);

export default Row;
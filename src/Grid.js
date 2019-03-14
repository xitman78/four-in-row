import React from 'react'
import './Grid.css'

const Cell = ({row, col, isActive, onChange}) => (
    <div 
        className={'grid-cell' + (isActive ? ' active' : '')}
        onClick={() => onChange(row, col)}
    />
);

class Grid extends React.Component {

    constructor() {
        super();

        this.handleCellClick = this.handleCellClick.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.state = {
            rows: [
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
            ]
        }
    }

    handleCellClick(rowIndex, colIndex) {

        const newRow = this.state.rows[rowIndex].slice(); // new array
        newRow[colIndex] = !newRow[colIndex];

        const allRows = this.state.rows.slice(); // new array
        allRows[rowIndex] = newRow;

        this.setState({
            rows: allRows,
        })

    }

    handleClear() {

        this.setState({
            rows: [
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
            ]
        });

    }

    render() {

        return (
            <div>
               { 
                   this.state.rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {row.map((cellValue, colIndex) => (
                            <Cell key={colIndex} 
                            row={rowIndex} 
                            col={colIndex} 
                            isActive={cellValue}
                            onChange={this.handleCellClick}
                            />
                        ))}
                    </div>
                    ))
               }
               <button className="clear-button" onClick={this.handleClear}>Clear</button>
            </div>
        );
    }

}


export default Grid;
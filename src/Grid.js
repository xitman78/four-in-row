import React from 'react'
import './Grid.css'

const Cell = ({row, col, isActive, onChange}) => (
    <div 
        className={'grid-cell' + (isActive ? ' active' : '')}
        onClick={() => onChange(row, col)}
    />
);


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

class Grid extends React.Component {

    constructor(props) {
        super(props);

        this.handleCellClick = this.handleCellClick.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.state = {
            rows: this.getInitState(props.col, props.row)
        }
    }

    getInitState(cols, rows) {
        const allRows = [];

        const colsArr = [];

        for (let i = 0; i < cols; i++) {
            colsArr.push(false);
        }

        for (let i = 0; i < rows; i++) {
            allRows.push(colsArr.slice());
        }

        return allRows;
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
            rows: this.getInitState(this.props.col, this.props.row)
        });

    }

    render() {

        return (
            <div>
               { 
                   this.state.rows.map((row, rowIndex) => (
                    <div key={rowIndex} className={'grid-row' + (isFourInRow(row) ? ' four-in-row' : '')}>
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
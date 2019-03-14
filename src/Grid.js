import React from 'react'
import Row from './Row'
import './Grid.css'

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
        return new Array(rows).fill([]).map(_ => new Array(cols).fill(false));
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
                   this.state.rows.map((row, rowIndex) => <Row key={rowIndex} rowIndex={rowIndex} rowData={row} onChange={this.handleCellClick}/>)
               }
               <button className="clear-button" onClick={this.handleClear}>Clear</button>
            </div>
        );
    }

}


export default Grid;
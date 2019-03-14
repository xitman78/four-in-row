import React from 'react'
import Row from './Row'
import './Grid.css'

function getInitState(cols, rows) {
  return new Array(rows).fill([]).map(_ => new Array(cols).fill(false));
}

class Grid extends React.Component {

  constructor(props) {
    super(props);

    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = {
      rows: getInitState(props.col, props.row)
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
      rows: getInitState(this.props.col, this.props.row)
    });
  }

  render() {
    return (
      <div>
        {
          this.state.rows.map((row, rowIndex) => <Row
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            onChange={this.handleCellClick}
          />)
        }
        <button className="clear-button" onClick={this.handleClear}>Clear</button>
      </div>
    );
  }

}


export default Grid;
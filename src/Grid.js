import React from 'react'
import Row from './Row'
import './Grid.css'

function getInitialState(cols, rows) {
  return {
    rows: new Array(rows).fill([]).map(_ => new Array(cols).fill(false)),
    redColumns: new Array(cols).fill(false),
  };
}

function isFourInColumn(data, colIndex) {
  let counter = 0;
  for (let row of data) {
    if (row[colIndex]) {
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

    this.state = getInitialState(props.col, props.row);

  }

  handleCellClick(rowIndex, colIndex) {

    const newRow = this.state.rows[rowIndex].slice(); // new array
    newRow[colIndex] = !newRow[colIndex];

    const allRows = this.state.rows.slice(); // new array
    allRows[rowIndex] = newRow;

    let redColumns = this.state.redColumns;

    if (isFourInColumn(allRows, colIndex)) {
      if (!redColumns[colIndex]) {
        redColumns = redColumns.slice();
        redColumns[colIndex] = true;
      }
    } else {
      if (redColumns[colIndex]) {
        redColumns = redColumns.slice();
        redColumns[colIndex] = false;
      }
    }

    this.setState({
      rows: allRows,
      redColumns,
    });
  }

  handleClear() {
    this.setState(getInitialState(this.props.col, this.props.row));
  }

  render() {
    return (
      <div>
        {
          this.state.rows.map((row, rowIndex) => <Row
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            redColumns={this.state.redColumns}
            onChange={this.handleCellClick}
          />)
        }
        <button className="clear-button" onClick={this.handleClear}>Clear</button>
      </div>
    );
  }

}

export default Grid;

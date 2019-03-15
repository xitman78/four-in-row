import React from 'react'
import './Cell.css'

const Cell = ({ row, col, isActive, isRed, onChange }) => (
  <div
    className={'grid-cell' + (isActive ? ' active' : '') + (isRed ? ' red ' : '')}
    onClick={() => onChange(row, col)}
  />
);

export default Cell;
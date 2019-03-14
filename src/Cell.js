import React from 'react'
import './Cell.css'

const Cell = ({row, col, isActive, onChange}) => (
    <div 
        className={'grid-cell' + (isActive ? ' active' : '')}
        onClick={() => onChange(row, col)}
    />
);

export default Cell;
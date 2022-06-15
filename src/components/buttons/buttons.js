import React from 'react';
import './buttons.scss';

export const Button = (props, type, onClick, buttonSize) => {
    return (
        <button className={`btn ${props.buttonStyle} ${buttonSize} ${props.className}`} type={type} onClick={onClick} >
            {props.children}
        </button>
    );
}
import React from 'react';
import './buttons.scss';

export const Button = (props, type, onClick, buttonSize) => {

    return (
        <button className={`btn ${props.buttonStyle} ${props.className}`} type={type} onClick={props.onClick} >
            {props.children}
        </button>
    );
}
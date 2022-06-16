import React, { useState } from 'react';
import { Button } from './buttons';
import arrowDown from './icon-arrow-down.svg';
import arrowUp from './icon-arrow-up.svg';
import './DropDownMenu.scss';
import imageTodolist from './images/icon-todo.svg';
import imageCalendar from './images/icon-calendar.svg';
import iconReminders from './images/icon-reminders.svg';
import iconPlanning from './images/icon-planning.svg';


export const DropDownMenu = (props) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(()  => !open);
    }


    const icon = (subMenu) => {
        switch (subMenu) {
            case 'Todo list':
                return imageTodolist;
            case 'Calendar':
                return imageCalendar;
            case 'Reminders':
                return iconReminders;
            case 'Planning':
                return iconPlanning;
            default:
                break;
        }

    }
    return (
        <div className='dd'  >
            <Button className='drop-down' onClick={handleClick} >{props.children} <img src={open ? arrowUp : arrowDown} alt='icon'/> </Button>
            {open &&
                <div className={`drop-down-menu ${props.children}`} >
                    <ul>
                        {props.subMenus && props.subMenus.map(subMenu => {
                            return (
                                <li className={`drop-down-menu__item ${subMenu}`} key={subMenu}>  {icon(subMenu) && <span> <img className='drop-down-menu__icon' src={icon(subMenu)} alt=''/> </span>}{subMenu}</li>
                            )
                        })}
                    </ul>

                </div>
            }
        </div>
    )
}
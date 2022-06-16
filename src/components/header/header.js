import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import menu from './icon-menu.svg';
import './header.scss';
import { Button } from '../buttons/buttons';
import { DropDownMenu } from '../buttons/DropDownMenu';


export const Header = (props) => {
    const [ menuMobile, setMenuMobile ] = useState( false )

    // this is making sure that every time the display size changes it figures if it needs to render the mobile or desktop menu;
    useEffect( () => {
        const handleResize = () => {
            if ( window.innerWidth > 1025) {
                setMenuMobile(false);
            }
        }

        window.addEventListener('resize', handleResize);

    }, [menuMobile] )



    const handleClickMenuButton = (e) => {
        setMenuMobile(!menuMobile);
    }

    const handleClickMenuMobileOutside = () => {
        setMenuMobile(false);
    }


    const features = ['Todo list', 'Calendar', 'Reminders', 'Planning'];
    const company = ['History', 'Our team', 'Blog'];
    return (
        <>
            <div className="header">
                <nav className='header-opt'>
                    <img className='logo' src={logo} alt='logo'/>
            {!props.mobile &&
                    <ul className='options'>
                        <li>
                            <DropDownMenu subMenus={features}>Features</DropDownMenu>
                        </li>
                        <li>
                            <DropDownMenu subMenus={company}>Company</DropDownMenu>
                        </li>
                        <li><Button>Careers</Button></li>
                        <li><Button>About</Button></li>
                    </ul>
            }
                </nav>
                {props.mobile ? <>
                    <img className='menu' src={menu} alt='menu' onClick={handleClickMenuButton} />
                    {menuMobile &&
                        <div className='menu-mobile'>
                            <div className='menu-mobile__background--white'>
                                <ul className='options'>
                                    <li>
                                        <DropDownMenu subMenus={features}>Features</DropDownMenu>
                                    </li>
                                    <li>
                                        <DropDownMenu subMenus={company}>Company</DropDownMenu>
                                    </li>
                                    <li><Button buttonStyle='none' className='none'>Careers</Button></li>
                                    <li><Button buttonstyle='none' className='none'>About</Button></li>
                                </ul>
                                <div className='options__cta'>
                                    <Button>Login</Button>
                                    <Button buttonStyle='outline' >register</Button>
                                </div>
                            </div>
                            <div className='menu-mobile__background--black' onClick={handleClickMenuMobileOutside}></div>
                            <div className='close--button' onClick={handleClickMenuButton} >
                                <div className='close--button__line one'></div>
                                <div className='close--button__line two '></div>
                            </div>
                        </div>
                    }
                </> :
                    <div className='options'>
                        <Button>Login</Button>
                        <Button buttonStyle='outline' >register</Button>
                    </div>
                }
            </div>
        </>
    )
}


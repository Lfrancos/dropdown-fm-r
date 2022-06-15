import React, { useState, useEffect } from 'react';
import { Header } from './components/header/header';
import { LandingPage } from './layout/landing-page';

export const App = () => {
     // this is the amount of pixels the display needs to change from mobile menu to desktop menu
     const breakingSize = 1025

     let init = true;
     // this figures out if the size of the screen is bigger or smaller than the breaking point so it can render the information that we need.
     if ( window.innerWidth > breakingSize) {
         init = false;
     } else {
         init = true;
     }

     // this are the different states that we need in this component
     const [ mobile, setMobile ] = useState( init );
    //  const [ menuMobile, setMenuMobile ] = useState( false )

     // this is making sure that every time the display size changes it figures if it needs to render the mobile or desktop menu;
     useEffect( () => {
         const handleResize = () => {
             if ( window.innerWidth > breakingSize) {
                 setMobile(false);
             } else {
                 setMobile(true);
             }
         }

         window.addEventListener('resize', handleResize);

     }, [mobile] )

    return (
        <>
            <Header mobile={mobile} setMobile={setMobile} breakingSize={breakingSize} />
            <LandingPage mobile={mobile} />
        </>
    )
}
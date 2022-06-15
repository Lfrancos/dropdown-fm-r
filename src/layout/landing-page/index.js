import  imageDesktop  from './image-hero-desktop.png';
import  imageMobile  from './image-hero-mobile.png';
import databiz from './client-databiz.svg';
import audiophile from './client-audiophile.svg';
import meet from './client-meet.svg';
import maker from './client-maker.svg';
import React from 'react';
import { Button } from '../../components/buttons/buttons';
import './landing-page.scss';

export const LandingPage = (props) => {

    return (
        <section className='landing-content'>
            <img className='landing-content__img' src={props.mobile ? imageMobile : imageDesktop} alt='main' />

            <div className="landing-content__text">
                <div className='landing-content text'>
                    <h1 className="landing-content__heading-one">Make remote work</h1>
                    <p className="landing-content__description">
                        Get your team in sync, no matter your location. Streamline processes,
                        create team rituals, and watch productivity soar.
                    </p>
                    <Button className='landing-content' buttonStyle="background">Learn more</Button>
                </div>
                <div className='landing-content__logos'>
                    <img className='flex-item one' src={databiz} alt='databiz' />
                    <img className='flex-item two' src={audiophile} alt='audiophile' />
                    <img className='flex-item three' src={meet} alt='meet' />
                    <img className='flex-item four' src={maker} alt='maker' />
                </div>
            </div>


        </section>
    )
}
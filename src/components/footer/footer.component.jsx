import React from 'react';
import Instagram from '../../assets/icons/instagram-icon.svg';
import Facebook from '../../assets/icons/facebook-circle.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';
import LinkedIn from '../../assets/icons/linkedin-icon.svg';
import YouTube from '../../assets/icons/youtube-icon.svg';

import {Link} from 'react-router-dom';

import './footer.styles.scss';


const Footer = () => (
    <div className='footer'>
        <div className='app'>
            <h3>DOWNLOAD OUR APP</h3>
            <img src='https://www.formula1.com/etc/designs/fom-website/images/svg/google-play-badge.svg'
            alt='play store image'
            />
            <img src='https://www.formula1.com/etc/designs/fom-website/images/svg/download-on-the-app-store-apple.svg' 
            alt='app store'
            />
        </div>
        <div className='social-media'>
            <h3>Follow us on Social Media</h3>
            <div className='icons'>
                <a href="https://www.instagram.com/f1/">
                    <img src={Instagram} alt='instagram icon' />
                </a>
                <a href="https://twitter.com/f1">
                    <img src={Twitter} alt='twitter icon' />
                </a>
                <a href="https://www.facebook.com/Formula1">
                    <img src={Facebook} alt='facebook icon' />
                </a>
                <a href="https://www.youtube.com/F1">
                    <img src={YouTube} alt='youtube icon' />
                </a>
                <a href="https://www.linkedin.com/company/formula-one-management-ltd/">
                    <img src={LinkedIn} alt='linkedin icon' />
                </a>
            </div>
        </div>
        <div className='side-note'>
        <p>
            *Note* I have no affiliation with Formula 1. This was a project done on my spare time to build on my skills.
        </p>
        </div>
    </div>
);

export default Footer;
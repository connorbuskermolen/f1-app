import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img 
                src='https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg' alt='f1 logo'
                width='100'
                height='40'
                >
            </img>
        </Link>
        <div className='options'>
            <a className='option' href='https://www.formula1.com/en/latest.html'>News</a>
            <a className='option' href='https://www.formula1.com/en/results.html/2020/drivers.html'>Standings</a>
            <a className='option' href='https://www.formula1.com/en/latest/article.f1-schedule-2021-bahrain-to-host-season-opener-as-australia-moves-later.4GpFlW2pc8sK9snFaVSHYg.html'>Events</a>
            <Link className='option subscribe' to='/'
            onClick={() => alert('Thanks for subscribing!')}            
            >
                Subscribe
            </Link>
        </div>
    </div>
);

export default Header;

{/* <Link className='option' to='/news'>News</Link>
<Link className='option' to='/standings'>Standings</Link>
<Link className='option' to='/events'>Events</Link> */}


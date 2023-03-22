import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {BsBriefcase} from 'react-icons/bs'

import style from './Header.module.css'

export const Header = () =>  (
 <div className={style.Container}> 
    <div className={style.DivApp}>
      <Link legacyBehavior href='/'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
        <span className={style.Span} style={{'margin-top':'0.5rem', 'cursor':'default'}}>App Weather</span>
        </a>
      </Link>
    </div>
    <div className={style.DivRefs}>
      <li>
        <Link legacyBehavior href='#locations'>
          <a className={style.NavLink}>My Locations</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='#add'>
          <a className={style.NavLink}>Add Location</a>
        </Link>
      </li>
    </div>
    <div className={style.DivSocialMedia}>
        <a className={style.SocialIcons} href='https://github.com/bosxch' target='_blank'>
            <AiFillGithub size='3rem'/>
        </a>
        <a className={style.SocialIcons} href='https://www.linkedin.com/in/amparo-cardoso-bosch/' target='_blank'>
            <AiFillLinkedin size='3rem'/>
        </a>
        <a className={style.SocialIcons} href='https://amparo-cardoso-bosch.vercel.app/' target='_blank'>
            <BsBriefcase size='3rem'/>
        </a>
    </div>
 </div>
);

export default Header;

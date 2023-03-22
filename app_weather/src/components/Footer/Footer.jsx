import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {BsBriefcase} from 'react-icons/bs'
import style from './Footer.module.css'

export const Footer = () => {
    <section className={style.FooterWrapper}>
        <div className={style.SocialIconsContainer}>
            <div className={style.SocialContainer}>
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
    </section>
}
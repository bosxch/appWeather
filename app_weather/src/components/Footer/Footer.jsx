import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FcDocument } from "react-icons/fc";
import {BsBriefcase} from 'react-icons/bs'

export const Footer = () => {
    <div className={style.FooterWrapper}>
        <div className={style.SocialIconsContainer}>
            <div className={style.SocialContainer}>
                <div className={style.SocialIcons}>
                    <FcDocument size='3rem'/>
                </div>
                <div className={style.SocialIcons}>
                    <AiFillGithub size='3rem'/>
                </div>
                <div className={style.SocialIcons}>
                    <AiFillLinkedin size='3rem'/>
                </div>
                <div className={style.SocialIcons}>
                    <BsBriefcase size='3rem'/>
                </div>
            </div>
        </div>
    </div>
}
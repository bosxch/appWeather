import React from 'react'

import {Footer} from '../components/Footer/Footer'
import {Header} from '../components/Header/Header'
import style from './LayoutStyles.module.css'

export const Layout = ({children}) => {
  return (
    <div className={style.Container}>
     <Header/>  
   
     <Footer/>
     </div>
  )
}

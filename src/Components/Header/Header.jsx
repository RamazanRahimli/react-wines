import React from 'react'
import  styles from '../Header/Header.module.scss'
import  Logo from '../../assets/logo (17).png'
const Header = () => {
  return (
    <div className={styles.box}>
        <div className={styles.container}>
        <div className={styles.topBox}>
            <img src={Logo} alt="" />
        </div>
        <div className={styles.bottomBox}>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Wines</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
        </div>
    </div>
  )
}

export default Header

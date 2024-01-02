"use client"
import Link from 'next/link';
import React from 'react'
import styles from "./navbar.module.css"
import Links from './links/Links';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';


const Navbar = () => {

    return (

        <div className={styles.container}>
            <Link href="/" className={styles.logo}>CESA & CSI </Link>
            <div>
               
                <Links />
            </div>
        </div>
    )
}

export default Navbar
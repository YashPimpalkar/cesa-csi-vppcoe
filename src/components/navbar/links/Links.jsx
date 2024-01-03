"use client"
import React, { useState } from 'react'
import styles from './links.module.css'
import Navlinks from './navlinks/Navlinks';
import Menu from '../../../../public/menubutton.png'
import Image from 'next/image';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    // {
    //     id: 6,
    //     title: "Dashboard",
    //     url: "/dashboard"
    // },
];
const Links = () => {
    const [open, setOpen] = useState(false);
    const session =useSession();
    const isAdmin = (false);
    return (
        <div className={styles.container}>
            
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link => (
                    <Navlinks item={link} key={link.id} href={link.url} />
                )))}{
                    session.status === "authenticated" ? (
                        <>
                            {isAdmin && <Navlinks item={{ id: "7", title: "Admin", url: "/Admin" }} />}
                            <button className={styles.logout} onClick={signOut}>logout</button>
                        </>
                    ) : (
                        // <Navlinks className={styles.login}  item={{ id: '8', title: "Login", url: "/login" }} /> 
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}><Image src={Menu} alt='Menu button' /></button>
            {open && (
                <div className={styles.mobileLinks}>
                    <DarkModeToggle />
                    {links.map((link => (
                        <Navlinks item={link} key={link.id} href={link.url} />
                    )))}
                    {
                    session.status === "authenticated" ? (
                        <>
                            {isAdmin && <Navlinks item={{ id: "7", title: "Admin", url: "/Admin" }} />}
                            <button className={styles.logout} onClick={signOut}>logout</button>
                        </>
                    ) : (
                        // <Navlinks className={styles.login}  item={{ id: '8', title: "Login", url: "/login" }} />
                    )
                }
                </div>
            )}
        </div>
    )
}

export default Links

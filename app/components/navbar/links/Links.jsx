"use client"
import styles from './links.module.css'
import React, { useState } from 'react'
import NavLink from './navLink/navLink'



const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ]
    // TEMPORARY 
    const session = true;
    const isAdmin = true;
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {links.map((link, index) => (

                    <NavLink key={index} item={link}></NavLink>



                ))}
                {session ?
                    (isAdmin && (
                        <>
                            <NavLink item={{ title: "Admin", path: "/admin" }} />
                            <button className={styles.logout}>Logout</button>
                        </>

                    )) :
                    (<NavLink item={{ title: "Login", path: "/login" }} />)
                }
            </div>
          
            <button className={styles.mobileBtn} onClick={()=>setOpen((prev) => !prev)}>Menu </button>
            {open && <div className={styles.mobileLinks}>
                {links.map(link => (
                    <NavLink item={link} key={link.title} />
                ))}

            </div>
            }
        </div>
    )
}

export default Links
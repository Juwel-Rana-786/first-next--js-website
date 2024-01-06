import Link from 'next/link'
import React from 'react'

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
    return (
        <div>
            {links.map((link,index) =>(
                <Link key={index} href={link.path}> {link.title}</Link>
            ))}
        </div>
    )
}

export default Links
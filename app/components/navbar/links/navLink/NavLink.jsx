
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from './navLink.module.css'


const NavLink = ({item}) => {
    const {title,path} = item;
    const pathName = usePathname();
  return (
    <Link key={path} href={path} className={`${styles.container} ${(pathName===path) && styles.active}`}> {title}</Link>
  )
}

export default NavLink;
"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import styles from './navlinks.module.css'

const Navlinks = ({item}) => {
    const pathName =usePathname();
  return (
    <Link  href={item.url} className={`${styles.container} ${pathName == item.url && styles.active}`}>
     {item.title}
    </Link>
  )
}

export default Navlinks
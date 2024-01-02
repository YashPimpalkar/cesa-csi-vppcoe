import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import social1 from '../../../public/facebook.svg'
import social2 from '../../../public/instagram.svg'
import social3 from '../../../public/whatsapp.svg'
import social4 from '../../../public/twitter.svg'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2024 CESA&CSI. All Rights Reserved</div> 
         <div className={styles.social}>
            <Image src={social1} width={15} height={15} className={styles.icon}></Image>
            <Image src={social2} width={15} height={15} className={styles.icon}></Image>
            <Image src={social3} width={15} height={15} className={styles.icon}></Image>
            <Image src={social4} width={15} height={15} className={styles.icon}></Image>
         </div>
    </div>
  )
}

export default Footer
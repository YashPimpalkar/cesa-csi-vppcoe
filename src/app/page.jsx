

import Image from 'next/image'
import React from 'react'
import cesa from '../../public/cesa.png'
import csi from '../../public/csi.png'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}> CESA & CSI VPPCOE</h1>
        <p className={styles.desc}>Platform for Improving Coding Knowledge,Technical Skills & etc.</p>
        <Button url="/portfolio" text="See Our Work" />
        </div>
        <div className={styles.item}>
           <Image src={cesa} alt='cesa vppcoe logo' className={styles.img} ></Image>
           <Image src={csi} alt='csi vppcoe logo'className={styles.img} ></Image>
      </div>
    </div>

  )
}

export default Home
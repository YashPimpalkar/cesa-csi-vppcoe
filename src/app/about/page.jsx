import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import hod from '../../../public/raissir1.png'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src={hod} fill={true} alt='rais sir vppcoe comp dept' className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgtitle}>HOD OF COMPUTER DEPARTMENT </h1>
          <p className={styles.imgdesc}>Dr.Rais Mulla Sir</p>
        </div>
      </div>
      <div className={styles.textContaienr}>
        <div className={styles.item}>
          <h1 className={styles.imgtitle}>Our Beloved HOD Sir</h1>
          <p className={styles.imgdesc}>From Kolhapur To Mumbai , From Assistant
            Professor To Head Of Department (HOD) Dr Rais Mulla.
            He Is A Gem To Behold! After His Graduation In Information Technology He Pursued
            M.Tech And Started His Career In Vppcoe In The Year 2015 As Assistant Professor
            And Since Then He Has Been Guiding Light To The Students Of Vppcoe.
            <br />
            <br />
            His Dedication And Hardwork Towards His Students & Institute Got Him
            The Position Of HoD Of Computer Engineering Department In August 2022 After Completing His PhD .
            Goes By The Belief That Innovation And Improvement Goes Hand In Hand! Blessing His Students Not
            Only With Academic Knowledge But Also With Life Lessons. His Multitasking Skills Aims At
            Completing The Vision Of The Institute.</p>
            <Button url="/contact" text="Contact" />
        </div>
        {/* <div className={styles.item}>
          <h1 className={styles.imgtitle}> </h1>
          <p className={styles.imgdesc}>  </p>
        
        </div> */}
      </div>
    </div>
  )
}

export default About
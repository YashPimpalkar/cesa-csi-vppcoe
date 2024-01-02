import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import image1 from '../../../public/Contactus.png' 

const Contact = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>Lets keep In Touch</h1>
       <div className={styles.content}>
          <div className={styles.imgContainer}>
             <Image  src={image1} alt='contact' fill={true} className={styles.image}  />
          </div>
          <form className={styles.form}>
             <input type="text" name="name" id="name" placeholder='Name' className={styles.input}  />
             <input type="email" name="email" id="email" placeholder='E-mail'   className={styles.input}/>
             <textarea name="textarea" id="textarea" cols="30" rows="10" className={styles.textarea} placeholder='Message'></textarea>
             <Button url="#" text="Send"></Button>
          </form>
       </div>
    </div>
  )
}

export default Contact
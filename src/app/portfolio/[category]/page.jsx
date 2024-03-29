import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';
import image1 from "../../../../public/bob.png"
import { items } from './data';
import { notFound } from 'next/navigation';

const getData=(cat)=>{
const data=items[cat]
if(data){
  return data
}
return notFound()
}

const category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.imgContainer}>
            <img src={item.image} alt="" className={styles.img} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default category

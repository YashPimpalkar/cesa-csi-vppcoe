import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import { notFound } from 'next/navigation';
import userimage  from '../../../../public/nophoto.png'

async function getData(id) {
  const res = await fetch(`https://cesa-csi-vppcoe.netlify.app/api/posts/${id}`,{
     cache: 'no-store' },
)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }
 
  return res.json()
}

export async function generateMetadata({ params}){
  const post = await getData(params.id)
  return{
    title: post.title,
    description:post.desc,
  }
}

const BlogPost = async ({params})  => {
  const data = await getData(params.id)
  return (
    <div className={styles.container} >
         <div className={styles.top}>
             <div className={styles.info} >
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.desc}>{data.desc}</p>
                <div className={styles.author}>
                  <Image src={userimage} alt='' width={40} height={40} className={styles.avatar} />
                  <span className={styles.username}>{data.username}</span>
                </div>
             </div>
             <div className={styles.imagecontainer}>
                   <Image src={data.img}  alt='blog image' width={300} height={300}  className={styles.image}/>
             </div>
         </div>
         <div className={styles.content}>
              <p className={styles.text}>{data.content}</p>
         </div>
    </div>
  )
}

export default BlogPost

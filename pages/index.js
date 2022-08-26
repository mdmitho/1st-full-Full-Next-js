import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// so how is the routing in next.js app

// file system based routing mechanism

// when a file is added to the pages folder in a project,

// by default all the files becomes available as a route.






export default function Home() {
  return (
    <div className={styles.container}>
   <h1>hello world</h1>


    </div>
  )
}

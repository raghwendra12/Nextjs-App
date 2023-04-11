import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Head><title>Nextsj Learning</title></Head>
         <Link href="/about" style={{fontSize:20}}>Go to about page</Link>
        <h1 className={styles.hometext}>Hello nextjs </h1>
        
        </div>
    </>
  )
}

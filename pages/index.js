
import Navbar from '../Components/Navbar';

import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar/>
      <h1 style={{color:"red"}}>hello world 1</h1>

<style>
  {`
    h1{
      color:green
    }
  `}
</style>
      <h1 >hello world</h1>
     
    </div>
  );
}

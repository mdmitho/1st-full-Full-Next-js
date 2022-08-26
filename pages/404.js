import Link from 'next/link';
import {useRouter} from "next/router"
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
  const router = useRouter()
  const handleInput =()=>{
    router.push("/")
  }

  useEffect(()=>{
    setTimeout(()=>{
      router.push("/");
    },4000)
  },[router])
    return (
      <div>
        <Navbar/>
        <h1>...................404........... not avalavil......</h1>
        {/* <Link href="home">
          <a> Back to homePage</a>
        </Link> */}

        {/* <a onClick={()=> router.push("/")}> Back to homePage</a> */}
        <a onClick={handleInput}> Back to homePage</a>
      </div>
    );
};

export default ErrorPage;
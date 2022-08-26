import Link from 'next/link';
import {useRouter} from "next/router"

const ErrorPage = () => {
  const router = useRouter()
  const handleInput =()=>{
    router.push("/")
  }
    return (
      <div>
        <nav>
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/product">
              <a>Product</a>
            </Link>
          </ul>
        </nav>
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
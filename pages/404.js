import Link from 'next/link';


const ErrorPage = () => {
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
        <a href="home"> Back to homePage</a>
      </div>
    );
};

export default ErrorPage;
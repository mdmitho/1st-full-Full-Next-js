import Link from 'next/link';
import React from 'react';
import Navbar from '../../Components/Navbar';


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};


const index = ({data}) => {

    console.log(data)
    return (
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <h1>hello blog</h1>
        

        {data.map((curElem) => {
          return (
            <div
              style={{
                border: "2px solid red",
                margin: "10px",
              }}
              key={curElem.id}
            >
              <h3>{curElem.id}</h3>
              <Link href={`/blog/${curElem.id}`}>
                <a >
                  {" "}
                  <h2>{curElem.title}</h2>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    );
};

export default index;
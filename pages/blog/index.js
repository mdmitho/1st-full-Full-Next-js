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
            <div style={{
               border:"2px solid red",
               margin:"10px"
            }} key={curElem.id}>
                <h1>{curElem.id}</h1>
              <h1>{curElem.title}</h1>
            </div>
          );
        })}
      </div>
    );
};

export default index;
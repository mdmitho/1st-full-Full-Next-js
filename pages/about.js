import React from 'react';
import Navbar from '../Components/Navbar';
import Image from 'next/image'

const About = () => {
    return (
      <div style={{textAlign:"center"}}>
        <Navbar />
        <h1>About</h1>
        {/* <Image src='/logo2.png'
            layout='fill'
            >

            </Image> */}
        <Image src="/logo2.png" width="500" height="300"></Image>
        
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCjHYhrksXwIZZwZJlx1jk2JBIcH10v7LZw&usqp=CAU"
          width="500"
          height="300"
        ></Image>
      </div>
    );
};

export default About;
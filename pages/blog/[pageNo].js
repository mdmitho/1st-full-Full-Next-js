import {useRouter} from "next/router"
import Navbar from "../../Components/Navbar";




export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((curElem) => {
      return {
        params: {
          pageNo: curElem.id.toString(),
        },
      };
    }); 

    return {
      paths,
      fallback: false,
    };
  };


  export const getStaticProps = async (context) => {
    const id = context.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  };
  

const PageNo = ({data}) => {

    const { id, title, body } = data;
    return (
      <div>
        <Navbar />

        <div
          style={{
            textAlign:"center",
            border: "2px solid green",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h1>my bolg Id : {id} </h1>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    );
};

export default PageNo;
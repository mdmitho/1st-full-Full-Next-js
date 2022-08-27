

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      
    </div>
  );
};

export default Blog;
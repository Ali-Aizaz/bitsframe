import { useEffect, useState } from 'react';
import { getBlog } from '../api/hello';
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const blog = await getBlog(slug);
  return { props: { blog } };
}

const Blog = ({ blog }) => {
  const [text, setText] = useState();
  useEffect(() => {
    const getText = async () => {
      setText(await (await fetch(blog.text).then((res) => res.blob())).text());
    };
    getText();
  }, []);
  return <pre></pre>;
};

export default Blog;

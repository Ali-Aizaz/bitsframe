import { useEffect, useState } from 'react';
import Image from 'next/image';
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
  return (
    <main className='flex justify-center'>
      <section className='lg:w-4/5 w-[95vw]'>
        <h1 className='text-5xl font-bold'>{blog.title}</h1>
        <Image src={blog.image} alt={blog.title} width={400} height={400} />
        <div
          className='content'
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </section>
    </main>
  );
};

export default Blog;

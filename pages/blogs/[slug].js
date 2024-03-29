import { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import { getBlog } from '../api/hello';
import Head from 'next/head';

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
  // const router = useRouter();
  // if (router.)
  //   return (
  //     <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
  //       <div
  //         className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
  //         role='status'
  //       >
  //         <span className='visually-hidden'>Loading...</span>
  //       </div>
  //     </div>
  //   );
  // else
  return (
    <>
      <Sidebar />
      <Head>
        <title>{blog.title}</title>
        <meta name='description' content={blog.description} />
        <link rel='icon' href='/logo.png' />
        <meta name='robots' content='index, follow, archive' />
        <meta property='og:type' content='artical' />
        <meta property='og:title' content={blog.title} />
        <meta property='og:site_name' content='Bitsframe' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      </Head>
      <main className='flex justify-center relative top-10 min-h-[70vh]'>
        <section className='lg:w-4/5 flex items-center flex-col w-[95vw] space-y-10'>
          <h1 className='text-5xl font-bold'>{blog.title}</h1>

          <article
            className='content text-gray-700'
            dangerouslySetInnerHTML={{ __html: text }}
          ></article>
        </section>
      </main>
    </>
  );
};

export default Blog;

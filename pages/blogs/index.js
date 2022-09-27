import Card from '../../components/card';
import Tabs from '../../components/tabs';
import Head from 'next/head';
import { getBlogs, getGenres, getMoreBlogs } from '../api/hello';
import { useState } from 'react';
export async function getServerSideProps() {
  const genres = Object.keys(await getGenres());
  const { blogs, lastBlog } = await getBlogs(genres[0]);
  return {
    props: {
      genres,
      blogs,
      lastBlog,
    },
  };
}

const Blogs = ({ genres, blogs, lastBlog }) => {
  const [selectedTab, setSelectedTab] = useState(genres[0]);
  const [blogsList, setBlogsList] = useState(blogs);
  const [last, setLast] = useState(lastBlog);
  const [loading, setLoading] = useState(false);
  const handlePagination = async () => {
    setLoading(true);
    const { blogs, lastBlog } = await getMoreBlogs(selectedTab, last);
    setLast(lastBlog);
    setBlogsList((blogsList) => [...blogsList, ...blogs]);
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>Bitsframe Blogs || {selectedTab} Articals</title>
        <meta
          name='description'
          content='Get your website developed by the best. High SEO ranking,
       user friendly interface, mobile optimization, low prices and modern UI/UX design. Bitsframe We Develope'
        />
        <meta name='robots' content='index, follow, archive' />
        <meta property='og:type' content='artical' />
        <meta
          property='og:title'
          content={`Bitsframe Blogs || ${selectedTab} Articals`}
        />
        <meta property='og:site_name' content='Bitsframe' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      </Head>
      <main className='flex flex-col items-center space-y-10'>
        <Tabs
          genres={genres}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setBlogsList={setBlogsList}
          setLast={setLast}
        />
        {blogsList.length === 0 || blogsList === undefined ? (
          <h1 className='font-semibold text-sm uppercase'>
            THERE ARE NO BLOGS IN {selectedTab}
          </h1>
        ) : (
          <section className='lg:w-4/5 justify-center  '>
            <ul className='flex  flex-wrap'>
              {blogsList.map((blog, idx) => {
                return <Card key={idx} blog={blog} />;
              })}
            </ul>
            <br />
            {blogsList.length % 25 === 0 ? (
              <button
                className={`btn ${loading && 'loading'}`}
                onClick={handlePagination}
              >
                {loading ? 'Loading' : 'Get More'}
              </button>
            ) : (
              <h1 className='text-center font-semibold text-sm uppercase'>
                YOU ARE UPTO DATE IN {selectedTab}
              </h1>
            )}
          </section>
        )}
      </main>
    </>
  );
};

export default Blogs;

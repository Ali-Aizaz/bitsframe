import Card from '../../components/card';
import Tabs from '../../components/tabs';
import Head from 'next/head';
import Sidebar from '../../components/sidebar';
import { getBlogs, getGenres, getNextPage, getPrevPage } from '../api/hello';
import { useState } from 'react';
export async function getStaticProps() {
  const genres = Object.keys(await getGenres());
  const { blogs, pagination } = await getBlogs('Education');
  return {
    props: {
      genres,
      blogs,
      pagination: JSON.stringify(pagination),
    },
    revalidate: 86400,
  };
}

const Blogs = ({ genres, blogs, pagination }) => {
  console.log(pagination);
  const [selectedTab, setSelectedTab] = useState(genres[0]);
  const [blogsList, setBlogsList] = useState(blogs);
  const [pag, setPag] = useState(pagination);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const handleNextPage = async () => {
    setLoading(true);
    const { blogs, pagination } = await getNextPage(selectedTab, pag.last);
    setPag(pagination);
    setBlogsList(blogs);
    setPage((page) => page + 1);
    setLoading(false);
  };
  const handlePrevPage = async () => {
    setLoading(true);
    const { blogs, pagination } = await getPrevPage(selectedTab, pag.first);
    setPag(pagination);
    setBlogsList(blogs);
    setPage((page) => page - 1);
    setLoading(false);
  };
  return (
    <>
      <Sidebar />
      <Head>
        <title>Bitsframe Blogs || {selectedTab} Articals</title>
        <link rel='icon' href='/logo.png' />
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
      <main className='flex flex-col items-center space-y-10 min-h-[70vh]'>
        <Tabs
          genres={genres}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setBlogsList={setBlogsList}
          setPag={setPag}
          setPage={setPage}
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

            {loading ? (
              <button className='btn loading' />
            ) : (
              <div className='btn-group flex justify-center'>
                <button
                  disabled={page === 1}
                  onClick={handlePrevPage}
                  className={'btn w-32 '}
                >
                  Previous
                </button>
                <button
                  disabled={blogsList.length % 25 > 0}
                  onClick={handleNextPage}
                  className={'btn w-32 '}
                >
                  Next
                </button>
              </div>
            )}
          </section>
        )}
      </main>
    </>
  );
};

export default Blogs;

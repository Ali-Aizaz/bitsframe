import Card from '../../components/card';
import Tabs from './tabs';
import { getBlogs, getGenres } from '../api/hello';
import { useCallback, useState } from 'react';
export async function getServerSideProps() {
  const genres = Object.keys(await getGenres());
  const blogs = await getBlogs(genres[0]);
  return { props: { genres, blogs } };
}

const Blogs = ({ genres, blogs }) => {
  const [selectedTab, setSelectedTab] = useState(genres[0]);
  const [blogsList, setBlogsList] = useState(blogs);

  return (
    <div className='flex flex-col items-center space-y-10'>
      <Tabs
        genres={genres}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setBlogsList={setBlogsList}
      />
      <section className='lg:w-4/5 justify-center flex flex-wrap '>
        {blogsList.map((blog, idx) => {
          return <Card key={idx} blog={blog} />;
        })}
      </section>
    </div>
  );
};

export default Blogs;

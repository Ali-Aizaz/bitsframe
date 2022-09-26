import { getBlogs } from '../api/hello';
import { toast } from 'react-hot-toast';

const Tabs = ({
  genres,
  selectedTab,
  setSelectedTab,
  setBlogsList,
  setLast,
}) => {
  const tabs = genres;

  const handleGetBlogs = async (tab) => {
    if (tab !== selectedTab) {
      setSelectedTab(tab);
      const data = getBlogs(tab);
      toast.promise(data, {
        loading: 'Loading...',
        success: 'Success',
        error: 'Error',
      });
      setBlogsList((await data).blogs);
      setLast((await data).lastBlog);
    }
  };
  return (
    <div className='tabs w-full px-10 py-4'>
      {tabs.map((tab, idx) => {
        return (
          <a
            key={idx}
            onClick={() => handleGetBlogs(tab)}
            className={`tab tab-lg tab-bordered ${
              tab === selectedTab && 'tab-active'
            }`}
          >
            {tab}
          </a>
        );
      })}
    </div>
  );
};

export default Tabs;

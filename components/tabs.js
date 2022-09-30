import { getBlogs } from '../pages/api/hello';
import { toast } from 'react-hot-toast';

const Tabs = ({
  genres,
  selectedTab,
  setSelectedTab,
  setBlogsList,
  setPag,
  setPage,
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
      setPag((await data).pagination);
      setPage(1);
    }
  };
  return (
    <div className='tabs w-full flex justify-center px-10 py-4'>
      {tabs !== undefined &&
        tabs.map((tab, idx) => {
          return (
            <a
              key={idx}
              onClick={() => handleGetBlogs(tab)}
              className={`tab tab-lg text-2xl  ${
                tab === selectedTab &&
                'tab-active text-stone-600 [#1F51FF] font-semibold'
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

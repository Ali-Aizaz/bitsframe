import { getBlogs } from '../api/hello';

const Tabs = ({ genres, selectedTab, setSelectedTab, setBlogsList }) => {
  const tabs = genres;

  const handleGetBlogs = async (tab) => {
    if (tab !== selectedTab) {
      setSelectedTab(tab);
      setBlogsList(await getBlogs(tab));
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

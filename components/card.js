import Link from 'next/link';

const Card = ({ blog }) => {
  return (
    <div className='card sm:w-96 w-80 glass bg-white/60 m-5 transition-all hover:-translate-y-2 hover:shadow-md delay-50 ease-in-out duration-300'>
      <figure>
        <img src={blog.image} alt={blog.title} />
      </figure>
      <div className='card-body'>
        <p className='text-sm font-semibold text-slate-800'>{blog.createdAt}</p>
        <Link href={`blogs/${blog.id}`}>
          <h2 className='card-title cursor-pointer hover:underline'>
            {blog.title}
          </h2>
        </Link>
        <p>{blog.description}</p>
        <div className='w-full space-x-2'>
          {blog.genres.map((genre, idx) => {
            return (
              <div key={idx} className='badge'>
                {genre}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

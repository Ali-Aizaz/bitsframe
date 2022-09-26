import Link from 'next/link';

const Card = ({ blog }) => {
  return (
    <div className='card w-96 glass m-5 transition-all hover:-translate-y-2 hover:shadow-md delay-50 ease-in-out duration-300'>
      <figure>
        <img src={blog.image} alt={blog.title} />
      </figure>
      <div className='card-body'>
        <Link href={`blogs/${blog.id}`} className='card-title'>
          {blog.title}
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

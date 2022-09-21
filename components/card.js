const Card = ({ blog }) => {
  return (
    <div className='card w-96 glass m-5 transition-all hover:-translate-y-2 hover:scale-105 delay-50 ease-in-out duration-300'>
      <figure>
        <img src={blog.image} alt='car!' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{blog.title}</h2>
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

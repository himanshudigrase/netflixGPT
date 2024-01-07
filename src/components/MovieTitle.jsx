
const MovieTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[15%] px-6 md:px-16 text-white bg-gradient-to-r from-black '>
      <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className=' flex my-4 md:m-0'>
        <button className='bg-white text-black py-1 md:py-4 px-3 md:px-8 text-xl rounded-lg hover:bg-opacity-80 flex items-center'><img  src='/play.png' className='w-24 -mr-6 -ml-4'/>Play</button>
        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>🛈 More Info</button>
      </div>
    </div>
  )
}

export default MovieTitle
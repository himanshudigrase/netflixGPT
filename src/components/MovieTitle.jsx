
const MovieTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[15%] px-24 text-white bg-gradient-to-r from-black '>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex'>
        <button className='bg-white text-black p-4 px-8 text-xl rounded-lg hover:bg-opacity-80 flex items-center'><img  src='/play.png' className='w-24 -mr-6 -ml-4'/>Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>🛈 More Info</button>
      </div>
    </div>
  )
}

export default MovieTitle
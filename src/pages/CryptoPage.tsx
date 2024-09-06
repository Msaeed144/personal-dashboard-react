import Progress from '../assets/inProgress.gif'
function CryptoPage() {
  return (
    <div className='flex justify-center w-full h-full my-auto'>
      <div>
        <h1 className=' text-white text-center text-2xl mb-2'>قسمت رمز ارز در دست احداثه...</h1>
        <img className='mx-auto rounded-xl text-center w-96 h-96' src={Progress} alt="" />
      </div>
    </div>
  )
}

export default CryptoPage
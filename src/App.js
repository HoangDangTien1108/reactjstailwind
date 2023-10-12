
import './App.css';

function App() {
  return (
    <>
    <div className='Landing Web bg-black'>
      <header className='text-white px-24 flex'>
        <div className='container mx-auto'>
          <div className='navigationBar flex flex-row justify-between items-center  w-full my-14'>
            <div className='logo'>
              <img src='image/Logo.png' alt='' />
            </div>
            <div className='option'>
              <ul className='flex flex-row'>
                <a className='px-4 text-base' href='#'><li>Home</li></a>
                <a className='px-4 text-base' href='#'><li>Portfolio</li></a>
                <a className='px-4 text-base' href='#'><li>Skills</li></a>
                <a className='px-4 text-base' href='#'><li>About Me</li></a>
              </ul>
            </div>
            <div className='flex gap-5 items-center justify-center'>
              <div className='switchMode flex px-1 py-1 rounded-3xl gap-1 bg-yellow items-center justify-center'>
                <div className='w-6 h-6 rounded-xl bg-white'>
                </div>
                <img className='w-5 h-5' src='image/moon.png' alt=''/>
              </div>
              <div className='Contact'>
                <button className='px-6 py-2 gap-1 bg-violet-500 rounded'>Contact Me</button>
              </div>
            </div>
          </div>

          <div className='productdesigne my-32 w-full flex justify-center items-center'>
            <div className='lg:w-[55%] flex '>
              <div className='lg:mx-0 lg:w-[455px]'>
                <div className=''>
                  <h1 className='font-anton font-normal text-[130px] leading-[118px] tracking-[-3%]'>PRODUCT DESIGNER</h1>
                  <h2 className='font-anton font-normal text-[74px] leading-[96px] tracking-[-3%] w-[455px] h-[90px] bg-gradient-to-r from-red to-orange text-transparent bg-clip-text '>CRISTIAN MUÑOZ</h2>
                </div>
                <div className='py-8'>
                  <u className='flex lg:items-center lg:justify-between '>
                    <a className='border rounded-[10px] p-1 gap-2'><li className='list-none w-8 h-8'><img src='image/instagram.png' /></li></a>
                    <a className='border rounded-[10px] p-1 gap-2'><li className='list-none w-8 h-8'><img src='image/Figma.png' /></li></a>
                    <a className='border rounded-[10px] p-1 gap-2'><li className='list-none w-8 h-8'><img src='image/linkedin.png' /></li></a>
                    <a className='border rounded-[10px] p-1 gap-2'><li className='list-none w-8 h-8'><img src='image/twitter.png' /></li></a>
                    <a className='border rounded-[10px] p-1 gap-2'><li className='list-none w-8 h-8'><img src='image/telegram.png' /></li></a>
                    <a className='border rounded-[10px] p-1 gap-2'><li className='list-none w-8 h-8'><img src='image/Medium Logo.png' /></li></a>     
                  </u>
                </div>
                <button className='flex py-4 px-6 bg-gray items-center justify-center gap-2 w-full'>
                  <h4 className='font-gotham font-normal text-lg leading-4 tracking-[-5%]'>Download Curriculum Vitae</h4>
                  <img src='image/arrow-down.png' />
                </button>
              </div>
              <div className='w-[120px]  h-[140px] lg:flex hidden '> 
                <img className='' src='image/Portal.png'/>
              </div>
            </div>
            <div className='xl:flex lg:flex xl:w-[45%] xl:px-0 lg:pl-16 hidden'>
              <img className='h-[580px]' src='image/colorful-vintage-collage-design 1.png' ></img>
            </div>
          </div>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;

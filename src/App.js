
import './App.css';
import Porfolio from './components/navbar';

function App() {
  return (
    <>
    <div className='Landing Web bg-black text-white'>
      <header className='text-white flex'>
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
                <button className='px-6 py-2 gap-1 bg-navBarViolet rounded'>Contact Me</button>
              </div>
            </div>
          </div>

          <div className='productdesigne my-32 w-full flex justify-center items-center'>
            <div className='lg:w-[55%] flex lg:m-0 '>
              <div className='lg:m-0 lg:w-[455px] w-[485px]'>
                <div className=''>
                  <h1 className='font-anton font-normal lg:text-[130px] lg:leading-[118px] text-[140px] leading-[125px] tracking-[-3%]'>PRODUCT DESIGNER</h1>
                  <h2 className='font-anton font-normal lg:text-[74px] lg:leading-[96px] text-[79px] leading-[102px] tracking-[-3%] lg:w-[455px] w-[482px] lg:h-[90px] h-[100px] bg-gradient-to-r from-red to-orange text-transparent bg-clip-text '>CRISTIAN MUÑOZ</h2>
                </div>
                <div className='py-8 lg:w-full'>
                  <u className='flex items-center justify-between'>
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
              <div className='w-[120px] h-[140px] lg:flex hidden '> 
                <img className='' src='image/Portal.png'/>
              </div>
            </div>
            <div className='xl:flex lg:flex w-[45%] hidden'>
              <img className='h-[580px]' src='image/colorful-vintage-collage-design 1.png' ></img>
            </div>
          </div>
        </div>
      </header>
      {/* nav */}

      <nav className='flex gap-[200px]'>
        <div className='coitainer mx-auto'> 
          <div className='rates flex gap-[10px] lg:px-[82px] px-[60px] border rounded-[29px] border-rateGray
          items-center justify-between  lg:py-[60px] py-[25px] xl:w-[1105px] lg:w-[100%] w-[80%] m-auto lg:text-left text-center mt-[50px]'>
              <div className='text-green flex flex-col gap-[21px]  lg:w-[225px] lg:h-[175px] w-[270px] h-[130px]'>
                <span className='font-anton font-normal lg:text-[95px] lg:leading-[90px] text-[60px] leading-[41px] lg:pt-0 pt-[20px] '>
                  90%
                </span>
                <h1 className='font-gotham font-black lg:text-[30px] lg:leading-[30px] text-[20px] leading-[20px] tracking-[-5%]'>
                  Job Success Score on Upwork
                </h1>
              </div>
              <div className='Dawn w-[55px] h-[55px] lg:flex hidden'>
                <img src='image/Dawn.png'/>
              </div>
              <div className='text-green flex flex-col gap-[21px]  lg:w-[300px] h-[130px]  lg:h-[180px]'>
                <span className='font-anton font-normal lg:text-[95px] lg:leading-[90px] text-[60px] leading-[41px] lg:pt-0 pt-[20px] '>
                  &gt;25.000
                </span>
                <h1 className='font-gotham font-black lg:text-[30px] lg:leading-[30px] text-[20px] leading-[20px] tracking-[-5%]'>
                  Duplicates on Figma Community
                </h1>
              </div>
              <div className='Dawn w-[55px] h-[55px] lg:flex hidden'>
                <img src='image/Dawn.png'/>
              </div>
              <div className='text-green flex flex-col gap-[21px]  lg:w-[150px] lg:h-[175px]  h-[130px]'>
                <span className='font-anton font-normal lg:text-[95px] lg:leading-[90px] text-[60px] leading-[41px] lg:pt-0 pt-[20px] '>
                  &gt;2k
                </span>
                <h1 className='font-gotham font-black lg:text-[30px] lg:leading-[30px] text-[20px] leading-[20px] tracking-[-5%]'>
                  In Finished Works
                </h1>
              </div>  
          </div>

          {/* PORFOLIO */}
          <div className='flex flex-col gap-[36px] my-[180px]'>
            <div className='lg:px-[115px] px-[82px]'>
              <h1 className='font-anton font-normal text-[60px] leading-[60px]'>PORTFOLIO</h1>
            </div>
            <div className='flex flex-wrap gap-[20px] justify-center'>
              <Porfolio/>
              <Porfolio/>
              <Porfolio/>
              <Porfolio/>
              <div className='lg:flex flex-wrap gap-[20px] justify-center hidden'>
                <Porfolio/>
                <Porfolio/>
                <Porfolio/>
                <Porfolio/>  
              </div>
            </div>
          </div>

          {/* Skill */}
          <div>
            
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default App;


import React from "react";

class Porfolio extends React.Component{
    render() {
        return(
            <div className='flex flex-col p-[30px] gap-[23px] border rounded-[10px] border-grayPtf lg:w-[20%] flex-wrap w-[40%]'>
                <img className='w-[100%]' src='image/Frame 7.png' />
                <div className=''>
                  <h2 className='font-gotham font-bold text-[24px] leading-[24px] tracking-[-5%]'>
                    Mi portal U
                  </h2>
                </div>
                <div className='flex text-tViolet gap-[5px]'>
                    <button className='border rounded-xl border-violet bg-violetPtf xxl:pt-3 lg:pt-2 py-1 px-2 font-gotham font-normal xxl:text-[10px] xxl:leading-[10px] tracking-[-5%] lg:text-[7.5px] lg:leading-[7.5px] pt-4 text-[14px] leading-[14px]'>UXDesign</button>
                    <button className='border rounded-xl border-violet bg-violetPtf py-1 xxl:pt-3 lg:pt-2 px-2 font-gotham font-normal xxl:text-[10px] xxl:leading-[10px] tracking-[-5%] lg:text-[7.5px] lg:leading-[7.5px] pt-4 text-[14px] leading-[14px]'>University</button>
                    <button className='border rounded-xl border-violet bg-violetPtf py-1 xxl:pt-3 lg:pt-2 px-2 font-gotham font-normal xxl:text-[10px] xxl:leading-[10px] tracking-[-5%] lg:text-[7.5px] lg:leading-[7.5px] pt-4 text-[14px] leading-[14px]'>JavaScript</button>
                </div>
                <button className='flex bg-buttonPtf gap-[5px] py-2 justify-center items-center font-gotham font-normal lg:text-[14px] lg:leading-[14px] text-[16px] leading-[16px] tracking-[-5%] pt-4 w-[100%]'>Figma community</button>
            </div>
        )
    }
}

export default Porfolio ;
    
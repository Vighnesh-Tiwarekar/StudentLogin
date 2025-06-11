import eduplus from './assets/eduplus.png'
import youtube from './assets/youtube.png'
import facebook from './assets/facebook.png'
import insta from './assets/insta.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'


export default function Footer() {

    return(
        <>
            <div className="relative flex py-[20px] bg-[#1867c0] justify-center items-center gap-[12px]">

                <div className="text-white ">
                    Powered By
                </div>

                <div>
                    <img src={eduplus} className='h-[27px]' alt="" />
                </div>

                <div className=' p-[5px] bg-white rounded-[11px]'>
                    <img src={youtube} className='h-[25px]' alt="" />
                </div>

                <div className=' p-[5px] bg-white rounded-[11px]'>
                    <img src={facebook} className='h-[25px]' alt="" />
                </div>

                <div className=' p-[5px] bg-white rounded-[11px]'>
                    <img src={insta} className='h-[25px]' alt="" />
                </div>

                <div className=' p-[5px] bg-white rounded-[11px]'>
                    <img src={twitter} className='h-[25px]' alt="" />
                </div>

                <div className=' p-[5px] bg-white rounded-[11px]'>
                    <img src={linkedin} className='h-[25px]' alt="" />
                </div>


                

            </div>
        </>
    )
}
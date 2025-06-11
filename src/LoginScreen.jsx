import banner from './assets/banner.jpg'
import vit_logo from './assets/vit_logo.png'
import './css/LoginScreen.css'
import user from './assets/user.svg'
import lock from './assets/lock.svg'
import help from './assets/help.png'
import forgot from './assets/forgot.png'
import google from './assets/google_play.jpeg'
import apple from './assets/app_store.jpeg'
import { useState } from 'react'

export default function LoginScreen() {

    const [ispreview, setispreview] = useState(false);

    const previewButton = () => {

        setispreview(previspreview=>!previspreview);
    }

    return (
        <>
            <div className="flex flex-col xl:flex-row justify-around items-center py-[120px] ">
                <div className='w-[70vw] xl:w-[40vw]'>
                    <img src={banner} alt="" />
                </div>

                <div className='w-[70vw] xl:w-[40vw] flex flex-col items-center'>

                    <div className='w-fit'>
                        <img src={vit_logo} alt="" className='h-[100px]' />
                    </div>

                    <div className='text-center font-bold text-[24px]'>
                        <span className='text-[#292dc2]'>Student Sign</span>
                        <span className='text-[#f39c12]'>-In</span>
                    </div>

                    <form className='login w-[100%] text-gray-500'>

                        <div className='flex gap-[20px] items-center  mt-[40px]'>
                            <img src={user} className='h-[20px] ' alt="" />
                            <div className='user relative w-[95%]'>
                                <input type="text" id='username' className='relative w-[100%]' required />
                            </div>
                        </div>

                        <div className={`flex gap-[20px] items-center relative mt-[40px] ${ispreview? null : 'prvcon'}`}>
                            <img src={lock} className='h-[20px] ' alt="" />
                            <div className='pass relative w-[95%]'>
                                <input type="text" id='password' className='relative w-[100%]' required />
                            </div>
                            <img src={preview} className='h-[20px] absolute right-0 prv cursor-pointer ' alt="" onClick={previewButton}/>
                        </div>

                        <div className='mt-[30px] w-fit mx-auto'>
                            <button className='text-white text-[14px] font-semibold bg-[#1867c0] py-[8px] px-[12px] rounded-[20px] cursor-pointer'>
                                SIGN IN
                            </button>
                        </div>
                    </form>

                    <div className="flex w-[100%] justify-between text-[#003349]">

                        <div className=' mt-[40px] cursor-pointer flex items-center gap-1 underline decoration-1'>
                            <img src={help} alt="" className='h-[20px]' />
                            <div>
                                Help
                            </div>
                        </div>

                        <div className=' mt-[40px] cursor-pointer flex items-center gap-1 underline decoration-1'>
                            <img src={forgot} alt="" className='h-[20px] rotate-y-180' />
                            Forgot Password?
                        </div>
                    </div>

                    <div className='flex mt-[20px] gap-[20px]'>

                        <div>
                            <img src={google} className='h-[35px] cursor-pointer' alt="" />
                        </div>

                        <div>
                            <img src={apple} className='h-[35px] cursor-pointer' alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
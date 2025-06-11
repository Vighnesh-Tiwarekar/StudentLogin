import vit_logo from './assets/vit_logo.png';
import burger_menu from './assets/burger-menu.svg'
import home from './assets/home.svg'
import dashboard from './assets/dashboard.svg'
import query from './assets/query.svg'
import help from './assets/help.svg'
import notification_bell from './assets/notification-bell.svg'
import maximize from './assets/maximize.svg'
import student from './assets/22310155photo.jpg'
import { useState, useEffect } from 'react';
import './css/Navbar.css'

export default function Navbar() {

    const [ismenu, setismenu] = useState(false);

    const menubutton = () => {
        setismenu(prevismenu => !prevismenu)
    }

    const NavItems = () => {

        return (
            <>
                <div className='p-[6px] hover:bg-[#d7d9e4] rounded-[20px] flex gap-10 items-center'>
                    <img className='h-[20px] md:h-[30px]' src={home} alt="" />
                    <div className='block md:hidden font-semibold text-[#5a66c0]'>Home</div>
                </div>

                <div className='p-[6px] hover:bg-[#d7d9e4] rounded-[20px] flex gap-10 items-center'>
                    <img className='h-[20px] md:h-[30px]' src={dashboard} alt="" />
                    <div className='block md:hidden font-semibold text-[#5a66c0]'>Dashboard</div>
                </div>

                <div className='p-[6px] hover:bg-[#d7d9e4] rounded-[20px] flex gap-10 items-center'>
                    <img className='h-[20px] md:h-[30px]' src={query} alt="" />
                    <div className='block md:hidden font-semibold text-[#5a66c0]'>Query</div>
                </div>

                <div className='p-[6px] hover:bg-[#d7d9e4] rounded-[20px] flex gap-10 items-center'>
                    <img className='h-[20px] md:h-[30px]' src={help} alt="" />
                    <div className='block md:hidden font-semibold text-[#5a66c0]'>Help</div>
                </div>

                <div className='p-[6px] hover:bg-[#d7d9e4] rounded-[20px] flex gap-10 items-center'>
                    <img className='h-[20px] md:h-[30px]' src={notification_bell} alt="" />
                    <div className='block md:hidden font-semibold text-[#5a66c0]'>Notifications</div>
                </div>

                <div className='p-[6px] py-[11px] pl-[8.5px] md:p-[6px] hover:bg-[#d7d9e4] rounded-[20px] flex gap-[42.5px] items-center'>
                    <img className='h-[15px] md:h-[20px]' src={maximize} alt="" />
                    <div className='block md:hidden font-semibold text-[#5a66c0]'>Maximize</div>
                </div>
            </>
        )
    }


    return (
        <div className='sticky z-20 top-0'>
            <div className='shadow-lg'>
                <div className="topbar flex py-[6px] px-[15px] bg-[#e8eaf6] w-[99vw] justify-between ">

                    <div className='flex items-center gap-[20px]'>
                        <div>
                            <img className='w-[38px] ' src={vit_logo} alt="" />
                        </div>
                        
                        <div className='p-[5px] rounded-[20px] hover:bg-[#d7d9e4] block md:hidden'>
                            <img src={burger_menu} onClick={menubutton} className='w-[30px]' alt="" />
                        </div>

                        <div className='font-bold text-[18px] max-w-[25vw] overflow-hidden whitespace-nowrap text-ellipsis hidden md:block'>
                            Vishwakarma Institute of Information Technology
                        </div>

                    </div>

                    <div className='flex items-center justify-around gap-[25px]'>

                        <div>
                            ⚡️
                        </div>

                        <div className='hidden md:flex items-center gap-[25px]'>
                            <NavItems></NavItems>
                        </div>

                        <div className='font-bold text-[16px] rounded-[20px] text-white bg-[#00007c] px-[10px] py-[8px]'>
                            VT
                        </div>

                    </div>

                </div>

                <div className="bg-white secondbar lg:mx-auto w-[90vw] py-[8px] px-[15px] font-bold text-[15px] text-gray-500 flex flex-col lg:flex-row justify-around lg:items-center gap-[10px] lg:gap-0">

                    <div className="tex flex gap-[15px] items-center">

                        <img src={student} className='h-[40px] w-[40px] object-cover object-top rounded-[20px]' alt="" />

                        <div className=''>
                            VIGHNESH TIWAREKAR
                        </div>

                        <div className="status bg-[#e9f0e9] font-normal text-[#62ae62] p-[5px] px-[10px] pl-[30px] rounded-[20px] flex items-center relative">
                            <span>Active</span>
                        </div>
                    </div>

                    <div className="two">
                        Registration No.22310155
                    </div>

                    <div>
                        BTech-Information Technology
                    </div>
                </div>
            </div>

            <div className='sidebar p-[20px]'>
                {ismenu ? <NavItems></NavItems> : null}
            </div>
        </div>
    )
}
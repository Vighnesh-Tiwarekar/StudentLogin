import { useEffect, useState } from "react"
import close from './assets/close_red.png'
import home from './assets/home_black.png'
import './css/Notification.css'
import drop from './assets/downarrow.png'

export default function Notification() {

    const [notifications, setnotifications] = useState([]);
    const [year, setyear] = useState(() => new Date().getFullYear());
    const [isfocus,setisfocus] = useState(false)

    useEffect(() => {
        const fetchNotif = async () => {
            try {
                const res = await fetch(`http://localhost:8000/vierp/notification/${year}`);

                if (!res.ok) {
                    throw new Error('Error fetching notifications');
                }

                const data = await res.json();
                setNotifications(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchNotif();
    }, [year]);

    const EmptyNotification = () => {
        return (
            <>
                <div className="bg-[#b00020] flex items-center text-white text-[16px] p-[15px] max-w-[100%] gap-[20px] rounded-[5px] box-border">
                    <div className="bg-white rounded-[20px] p-[5px]">
                        <img src={close} className="h-[15px] " alt="" />
                    </div>
                    Notification Not Found For Calendar Year : {year}
                </div>
            </>
        )
    }

    const changeFocus = () =>{
        setisfocus(previsfocus => !previsfocus)
    }

    return (
        <div className="w-[63vw] mx-auto">
            <div className="">
                <div className="flex gap-[10px] items-center text-[#000000] mb-[30px]">
                    <div>
                        <img src={home} className="h-[20px] " alt="" />
                    </div>
                    Home &nbsp;/
                    <div className="text-[#848484]">
                        Notification
                    </div>
                </div>
            </div>

            <div className="pl-[15px] pt-[15px] pb-[30px] rounded-[5px] max-w-[100%] box-border shadow-2xl mb-[20px]">
                <form action="">
                    <div className="years relative w-fit">
                        <select
                            name="year"
                            id="year"
                            value={year}
                            onChange={(e) => setyear(Number(e.target.value))}
                            className=" pb-[5px] pl-[13px] pt-[23px] pr-[20px] w-[17vw] font-semibold shadow-xl"
                            // onFocus={changeFocus}
                            onBlur={()=>isfocus?changeFocus():null}
                            onClick={changeFocus}
                        >
                            {Array.from({ length: year - 1992 + 1 }, (_, index) => {
                                const yr = 2025 - index;
                                return (
                                    <option key={yr} value={yr} className="bg-white text-[#5900ff] font-bold">
                                        {yr}
                                    </option>
                                );
                            })}
                        </select>

                        <img src={drop} alt="" className={`${isfocus?' rotate-180':' rotate-0'} down`}/>
                    </div>
                </form>
            </div>

            {notifications.length ? null : <EmptyNotification></EmptyNotification>}
        </div>
    )
}
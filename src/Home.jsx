import './css/Home.css'
import academics from './assets/academics.svg'
import account from './assets/account.webp'
import admission from './assets/admission.svg'
import assignment from './assets/assignment.svg'
import certificate from './assets/certificate.svg'
import events from './assets/event.svg'
import exam from './assets/exam.svg'
import feedback from './assets/feedback.svg'
import hostel from './assets/hostel.svg'
import ttable from './assets/ttable.webp'
import project from './assets/project.svg'
import quiz from './assets/quiz.svg'
import subreg from './assets/subreg.svg'
import { useState } from 'react'
import search from './assets/search.png'

export default function Home() {

    const [issearch, setissearch] = useState('')

    const modules = [{ title: 'Academics', image: academics },
    { title: 'Account', image: account },
    { title: 'Admission', image: admission },
    { title: 'Assignment', image: assignment },
    { title: 'Certificate', image: certificate },
    { title: 'Event', image: events },
    { title: 'Examination', image: exam },
    { title: 'Feedback', image: feedback },
    { title: 'Hostel', image: hostel },
    { title: 'My Time Table', image: ttable },
    { title: 'Project Monitoring', image: project },
    { title: 'Quiz', image: quiz },
    { title: 'Subject Registration', image: subreg }
    ]

    const changeSearch = (e) => {
        setissearch(e.target.value);
    }

    const Modules = () => {
        return modules
            .filter(module =>
                issearch === '' || module.title.toLowerCase().includes(issearch.toLowerCase())
            )
            .map((module, index) => (
                <div key={index} className='card relative'>
                    <div className='font-bold text-[20px] relative z-1'>{module.title}</div>

                    <div className='cimg border-1 p-[10px] w-fit h-fit rounded-[40px] absolute bottom-[20px] inset-x-0 mx-auto z-2 bg-white'>
                        <img src={module.image} className='h-[50px] w-[50px] object-cover' alt={module.title} />
                    </div>

                </div>
            ));
    }


    return (
        <>

            <div className="relative z-1 mt-[30px]">
                <div className='flex relative w-fit mx-auto'>
                    <div className='search relative'>
                        <input type="text" id='search' value={issearch} className='relative w-[30vw] py-[2px]' required  onChange={changeSearch}/>
                    </div>
                    <img src={search} className='h-[20px] absolute right-0 invert-50' alt="" />
                </div>
            </div>

            <div className='mt-[50px] bg-[#ffffff] gap-[30px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 content-center justify-self-center gap-x-[35px] gap-y-[20px]'>
                <Modules></Modules>
            </div>

        </>
    )
}
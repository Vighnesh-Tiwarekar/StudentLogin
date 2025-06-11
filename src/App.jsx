import './App.css'
import Footer from './Footer'
import LoginScreen from './LoginScreen'
import Navbar from './Navbar'
import Home from './Home'
import question from './assets/question.png'
import Dashboard from './Dashboard'
import Notification from './Notification'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <LoginScreen></LoginScreen>

      <Home></Home>

      <div className='flex fixed z-2 bg-[#006063] text-white text-[14px] font-semibold left-1 bottom-[8px] items-center gap-1 p-[10px] py-[8px] rounded-[20px] rounded-tr-[4px]'>
        <img src={question} className='invert-100 h-[20px]' alt="" />
        Support
      </div>
      <Footer></Footer> */}
      <Notification></Notification>
    </>
  )
}

export default App

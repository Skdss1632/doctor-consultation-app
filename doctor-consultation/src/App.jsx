
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Doctor from './pages/Doctor'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'


const App = () => {
  return (
    // mx- means margin on x axis
    <div className='mx-4 sm:mx-[10%]'>
      {/* navbar will be visible in all pages thats why added here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<MyAppointment />} />
      </Routes>
      <Footer />
      </div>

  )
}

export default App
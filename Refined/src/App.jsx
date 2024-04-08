
import Header from "./Components/Header"
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Browse from './Components/Pages/Browse'
import Language from './Components/Pages/Language'
import Dashboard from './Components/Pages/Dashboard'
import Activities from './Components/Pages/Activities'

import All from './Components/Pages/All'
import Navbar from "./Components/Navbar"
import Careers from "./Components/Pages/Careers"
// import MainSec from './Components/MainSec'
//import Galaxy2 from './Components/Galaxy2'
function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      {/* <MainSec/> */}
      
      
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Dashboard' element={<Dashboard/>}/>
       <Route path='/Activities' element={<Activities/>}/>
       <Route path='/Browse' element={<Browse/>}/>
       <Route path='/Language' element={<Language/>}/>
       <Route path='/All' element={<All/>}/>
       <Route path='/Careers' element={<Careers/>}/>

      </Routes>
    </div>
  )
}

export default App;


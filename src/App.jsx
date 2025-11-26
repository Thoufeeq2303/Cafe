import './App.css'
import Home from "./Home"
import Funt from './coom_types/Funt'
import Component from './Component'
import Per from './coom_types/Cls'
import UseState from './Hooks/UseState'
import UseMemo from './Hooks/UseMemo'
import UseEffect from './Hooks/UseEffect'
import Air from './Hooks/Air'
import Usecallback from './Hooks/Usecallback'
import From from './From/From'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Thha from "./Pages/Thha"
import Link from "./Pages/Link"
import Navbar from './header/Navbar'
import Foot from './header/Foot'
import List from './List/List'

function App() {
  return (
    <>
    {/* //   <Component/>
    //   <Funt name="berg"/>
    //   <Per/>
    //   <Home/>
    //   <UseState/>
    //   <UseMemo/>
    //   <UseEffect/>
    //   <Air/>
    //   <Usecallback/>
    //   <List/>
    //   <From/> */}

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Thha/>}/>
      <Route path='/link' element={<Link/>}/>
      <Route path='/list' element={<List/>}/>
    </Routes>
    <Foot/>
    </BrowserRouter>
    </>
  )
}

export default App

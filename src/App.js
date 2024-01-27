
import './App.css';
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WorkingHistory from './pages/WorkingHistory'
import Header from './components/Header'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
       <Header/>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='workinghistory' element={<WorkingHistory></WorkingHistory>}></Route>
      </Routes>


      <Footer />
     

    </div>
  );
}

export default App;

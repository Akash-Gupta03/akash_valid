// import logo from './logo.svg';
import './App.css';
import ExpenseTracker from './components/expense';
// import logo1 from '../src/assests/logo-lg.png'
import Extrafile from './extrafile';

import Loginpage from './components/login2'
import Signup from './components/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './work/page1';
import ChildComponent from './work/page2';
import Propspage from './components/props'
import Edit from './components/edit';
// import {MyProvider } from './components/MyProvider'
import Extrapage from './components/extra';
import Validation from './validation/input-validation';
import Useforms_page from './components/useforms'



function App() {
  return (
    
    // <MyProvider>
    <Router >
     
     

  
    <Routes>
   
      <Route path="/" element={< Signup/>} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/expense" element={< ExpenseTracker/>} />
      {/* <Route path="/extra" element={< Extrafile/>} /> */}
      <Route path="/page" element={< Page1/>} />
      <Route path="/page2" element={< ChildComponent/>} />
      <Route path="/props" element={< Propspage name="Akash"/>} />
      <Route path="/extra" element={< Extrapage/>} />
      <Route path="/valid" element={< Validation/>} />
      <Route path="/useform" element={< Useforms_page/>} />




      </Routes> 

</Router>
// </MyProvider>
  );
}

export default App;
    
      {/* <div className='container-top'>
        <a className='mx-3' href='/dds'>Akash</a>
        <a className='mx-3' href='/dds'>Aditya </a>
        <a className='mx-3' href='/dds'>Aman </a>

        <a className='mx-3' href='/dds'>Aakash </a>
        <a className='mx-3' href='/dds'>Anmol </a>
        <a className='mx-3' href='/dds'>Akshiya </a>



      </div> */}

  
      {/* <div className='ui-head-grid clearfix' >
        <div class="ui-head">


          <a href='/' ><img src={logo1} alt="Logo" /></a>
        </div>



        <div className='zodiac-sign'>
          <div class="col-xs-2 col-sm-2 br-t br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>

          <div class="col-xs-2 col-sm-2 br-t br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>
          <div class="col-xs-2 col-sm-2 br-t br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>


          <div class="col-xs-2 col-sm-2 br-t br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>

          <div class="col-xs-2 col-sm-2 br-t br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>

          <div class="col-xs-2 col-sm-2 br-t br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>
          <div class="col-xs-2 col-sm-2 br-tb br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>
          <div class="col-xs-2 col-sm-2 br-tb br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>
          <div class="col-xs-2 col-sm-2 br-tb br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>
          <div class="col-xs-2 col-sm-2 br-tb br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>

          <div class="col-xs-2 col-sm-2 br-tb br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>
          <div class="col-xs-2 col-sm-2 br-tb br-r br-l">
            <a href="https://www.astrosage.com/2024/aries-horoscope-2024.asp" class="btn-flat-bg">Aries</a>
          </div>

        </div>
        <div class="ui-language ui-head-block-d ">
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>

          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>

          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
          <a href="https://www.astrosage.com/tamil/" class="btn btn-deep-orange br-radius card-shadow" data-toggle="tooltip" title="" data-original-title="Tamil"><span class="min-screen">த</span></a>
        </div>


      </div> */}

     
{/* 
      <div class="container rd-div clearfix">
      
  <div class="float-left">Left Content</div>
  <div class="float-right">Right Content</div>
</div> */}
{/* <p>Content</p> */}
{/* <nav className="navbar navbar-expand-lg navbar-light   text-white"  >
        <div className="container-fluid" >

         
          <a className="navbar-brand" href="#"><img className='logo-position' src={logo} alt='logo-image' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav  "  >
             

              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle fs-6 mx-3 hvr-sweep-to-bottom " href="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "black" }} >
                  SERVICES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                  <li><a className="dropdown-item" href="/Software-Development-service">Software Development service</a></li>
                  <li><a className="dropdown-item" href="/Software-Development-process">Software Development process</a></li>

                  <li><a className="dropdown-item" href="/Content-Management">Content Management</a></li>
                  <li><a className="dropdown-item" href="/Quality-Assurance">Quality Assurance</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6 mx-3 hvr-sweep-to-bottom " href="/projects" style={{ color: "black" }}>PROJECTS</a>
              </li>
             
            
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fs-6 mx-3 hvr-sweep-to-bottom " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "black" }} >
                  COMPANY
                </a>
                <ul className="dropdown-menu flex" aria-labelledby="navbarDropdown" >
                  <li><a className="dropdown-item" href="/about-us  ">About</a></li>
                  <li><a className="dropdown-item" href="/carrer">Career</a></li>

                  <li><a className="dropdown-item" href="/team">Our Team</a></li>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active ms-3 fs-6 mx-3 hvr-sweep-to-bottom " aria-current="page" href="/contact-us" >CONTACT</a>
              </li>
            </ul>


          </div>
        </div>
      </nav> */}

      {/* <Extrafile/> */}









    


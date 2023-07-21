import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import InpDetails from './inp_disp/insertCustomer';
import LoginForm from './login_page/loginform';
import SideBar from './dashboard/sidebar';
import DispDetails from './inp_disp/showdet.js';
import Sidebar from './dashboard/btssidebar.js';
import LoanDetails from './inp_disp/loan';
import EmiDet from './inp_disp/emi';
import UpdateEmi from './inp_disp/pendingemi';


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element = {<LoginForm/>}></Route>
        <Route path="/dashboard" element = {<SideBar/>}></Route>
        <Route path="/sidebar" element ={<Sidebar/>}></Route>
        <Route path="/custDetail" element = {<DispDetails/>}></Route>
        <Route path="/addCust" element = {<InpDetails/>}></Route>
        <Route path="/addLoan" element={<LoanDetails/>}></Route>
        <Route path='/loanDetail' element={<EmiDet/>}></Route>
        <Route path='/repay' element={<UpdateEmi/>}></Route>

        
      </Routes>
    </Router>
  )
}

export default App;

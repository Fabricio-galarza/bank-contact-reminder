
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BankContactReminderNew, BankContactReminderLogin, BankContactReminderDashboard } from "./components";
import BankContactReminderNewContact from "./components/BankContactReminderNewContact";

const App = () => {

  return (
    <Router>
        <Suspense fallback={<p>Loading.....</p>}>
            <Routes>
                <Route path='/login' Name='Login' element={<BankContactReminderLogin/>}/>
                <Route path='/' Name='New Account' element={<BankContactReminderNew/>}/>
                <Route path='/dashBoard' Name='DashBorad' element={<BankContactReminderDashboard/>}/>
                <Route path='/NewContact' Name='New Contact' element={<BankContactReminderNewContact/>}/>
                
            </Routes>
        </Suspense>
    </Router>
  );
}

export default App;

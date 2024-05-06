
import './App.css';
import GetstartedMain from './components/Getstarted/GetstartedMain';
// import Registration from './components/Signup/Registration/Registration' ;

import {
  BrowserRouter,
  Route,Routes,Navigate
} from "react-router-dom";
import Signup from './components/Signup/Signup';


function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/in' element={<GetstartedMain />} />
        <Route exact path='/' element={<Navigate to="/in" replace />} />
        <Route path=''  element={<Signup />} >
          <Route exact path='/signup/registration' />
          <Route path='/signup/planform' />
          <Route path='/signup/regform' />
          <Route path='/signup' />
          <Route path='/signup/paymentPicker' />  
        </Route>
      </Routes>


    </BrowserRouter>
    
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import AlishaCompon from "./components/AlishaCompon";
import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

const [alert, setAlert] = useState(null) //To show Dismiss Alerts
const showAlert = (message,type) => {
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },2000)
}

const [mode, setMode] = useState('light') //whether Dark mode is enabled or not
const toggleMode = () => {
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert('Dark mode is enabled', 'success');
    document.title = 'Dark mode enabled';
    // setInterval(() => {
    //   document.title = 'Amazing';
    //     }, 5000);
    // setInterval(() => {
    //   document.title = 'HI';
    // }, 3000);    
  }else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light mode is enabled', 'success');
    document.title = 'Light mode enabled';
  }
  }

  return (
    <>
  {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={ <TextForm heading="Enter the text to convert to uppercase" mode={mode} showAlert={showAlert}/>} />
      </Routes> */}
      <About />
      <TextForm heading="Enter the text to convert to uppercase" mode={mode} showAlert={showAlert}/>
        {/* <AlishaCompon/> */}
    </div>
  {/* </Router> */}
    </>
  );
}

export default App;

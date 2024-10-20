import { createContext, useContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import AppRouter from './Layout';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Sign from './Component/Sign/Sign';
import Home from './Component/Home/Home';
import Card from './Component/Card/Card';
import Cart from './Component/Cart/Cart';
import { Login } from './Component/login/Login';

const SignUp = createContext();
const Dropdown = createContext();

const Detect = ({ onClose, updateLocation }) => {


const getlocation = async (lat,lon)=>{
  
  const Api_key='b3400917bb2abe0e6fa865ad92628577';
  const Url = 'https://api.openweathermap.org/data/2.5/weather?'
  const response =  await fetch(`${Url}lat=${lat}&lon=${lon}&appid=${Api_key}`);
  const address = await response.json();
  console.log(address);
  const coord =`  (lat : ${lat} lon : ${lon})`

  updateLocation(address.name + coord);
  
}


  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationString = `Lat: ${latitude}, Lon: ${longitude}`;
           getlocation(latitude,longitude)
          onClose();
        },
        (error) => {
          console.error("Error detecting location: ", error);
          onClose();
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      onClose();
    }
  };

  return (
  <div className='w-full absolute z-50 absolute  items-center top-0 left-0'>
      <button
        className="w-1/4 flex justify-center ml-40 items-center h-12 text-sm p-4 mt-24 ring-1 ring-red-400 rounded-md bg-white text-red-400 border hover:border-pink-500 focus:outline-none focus:ring-2"
        onClick={handleDetectLocation}
      >
        <svg
          className='h-4 fill-red-400 mr-1 w-fit'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
        </svg>
        Detect your location
      </button>
    </div>
  );
};



function App() {
  const [sign_up, setsign] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const [location, setLocation] = useState('Ywca, !, Ashoka Rd, Hanu');

  return (
    <>
    <Router>
      <Dropdown.Provider value={{ dropdown, setdropdown }}>
        {dropdown && <Detect onClose={() => setdropdown(false)} updateLocation={setLocation} />}
        <SignUp.Provider value={{ sign_up, setsign }}>
          {sign_up && (
            <Sign
              onClose={() => setsign(false)}
              className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}


         
          <Routes>
        
        <Route path="/" element={ <Header  location={location}/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>} />
               </Routes>
          <Footer />
        </SignUp.Provider>
      </Dropdown.Provider>
      68</Router>
    </>
  );
}

export default App;

export const useDropdown2 = () => {
  return useContext(Dropdown);
};

export const useSign = () => {
  return useContext(SignUp);
};

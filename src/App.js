import {useState } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import './assets/icons/icons';
import Main from './components/main/main';
import Sidebar from './components/sidebar/sidebar';
import {motion as m} from 'framer-motion';

function App() {

  const [showAside, setShowAside] = useState(false);

  function setAside() {
    setShowAside(!showAside);
  }

  return (
    <>
      <div className="relative">
      <Sidebar showAside={showAside}/>
      <div
          className={`w-[80%] transition-all ease duration-700 ${
            showAside ? 'ml-[20%]' : 'ml-[10%]'
          }`}
        >
          <Navigation setAside={setAside} showAside={showAside} />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;

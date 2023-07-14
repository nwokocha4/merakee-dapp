import { Home } from './component/pages/Home';
import { About } from './component/pages/About';
import { Details } from './component/pages/Details';
import { Map } from './component/pages/Map';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './App.css';


//import { useMoralis } from 'react-moralis';


function App() {
 
//const { isWeb3Enabled } = useMoralis();

// {isWeb3Enabled ? ( <Home />) : (
//   <div>Please connect to a wallet</div>
//   ) }

// {(useConnectionStatus === "connected") ?  (
//   <div>Please connect to a wallet</div>
// ) 
//  : (<Home/>)
// }

  return (
    <div className='App'>
      <Navbar/>
      <div id='home'>
   <Home/>
   </div>
   <div id='about'>
   <About/>
   </div>
   <div id='details'>
   <Details />
   </div>
   <div  id='map'>
   <Map/>
   </div>
   
   <Footer/>
   </div>
   )
}

export default App;


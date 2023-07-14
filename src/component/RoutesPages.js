import { Routes, Route, Router } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Details } from './pages/Details';
import { Map } from './pages/Map';


function RoutePages() {
    return(
        
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/details" element={<Details />}/>
            <Route path="/map" element={<Map />}/>
        </Routes>
        
        
    )
}

export default RoutePages;
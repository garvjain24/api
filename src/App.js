import "./App.css";
import { Map } from "./components/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapoptions } from "./components/MapConfigure";
import {Tab} from "./components/Search"
//


function App() {

  const { isLoaded } = useJsApiLoader({
    id: mapoptions.googleMapApiKey,
    googleMapsApiKey: mapoptions.googleMapApiKey,
  });
  return (
    <div className="App">
      
      <p>
        .
        .
      </p>
      <Map isLoaded={isLoaded} />
      
  
    </div>
  );
}

export default App;

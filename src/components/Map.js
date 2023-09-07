import { GoogleMap, Marker } from "@react-google-maps/api";
import CustomMarker from "../assets/Markers/DangerMarker2.png"
const Map = (props) => {
  const { isLoaded } = props;
  const containerStyle = {
    width: "1000px",
    height: "1000px",
  };

  const center = {
    lat: 19.076,
    lng: 72.8777,
  };
  const mark = {
    lat: 18.5204,
    lng: 73.8567,
  };
  const markers = [
    {
      name: "location-1",
      location: {
        lat: 19.04962,
        lng: 72.82272,
      },
    },
    {
      name: "location-2",
      location: {
        lat: 19.125770,
        lng: 72.828760,
      },
    },
    {
      name: "location-3",
      location: {
        lat: 19.103300,
        lng: 72.839620,
      },
    },
    {
      name: "location-4",
      location: {
        lat: 19.205980,
        lng: 72.866060,
      },
    },
  ];
  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
        <Marker position={mark} />
        {markers.map((markers)=>{
            return (
                <div key={markers.name}>
                    <Marker position={markers.location} 
                    options={{
                        icon:CustomMarker,
                    }}
                    />
                </div>
            )
        })}
      </GoogleMap>
    )
  );
};
export { Map };

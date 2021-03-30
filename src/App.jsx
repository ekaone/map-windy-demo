import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const options = {
      // Required: API key
      key: "29aATsius3WlYCfArDqx9oGjCEERUQia", // REPLACE WITH YOUR KEY !!!

      // Put additional console output
      verbose: true,

      // Optional: Initial state of the map
      // sambiloto -6.185725569944561, 106.87829266788778
      lat: -6.185725569944561,
      lon: 106.87829266788778,
      zoom: 10,
    };

    // Initialize Windy API
    windyInit(options, (windyAPI) => {
      // windyAPI is ready, and contain 'map', 'store',
      // 'picker' and other usefull stuff

      const { map } = windyAPI;
      // .map is instance of Leaflet map

      L.popup()
        .setLatLng([-6.185725569944561, 106.87829266788778])
        .setContent("Loema Tech")
        .openOn(map);
    });
  }, []);

  return (
    <>
      <div id="windy" style={{ width: "100%", height: "100vh" }}></div>
    </>
  );
}

export default App;

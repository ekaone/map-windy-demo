import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const env = import.meta.env.VITE_APP_TITLE;
    const options = {
      key: env,

      verbose: true,

      lat: -6.185725569944561,
      lon: 106.87829266788778,
      zoom: 10,
    };

    // Initialize Windy API
    windyInit(options, (windyAPI) => {
      const { map } = windyAPI;

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

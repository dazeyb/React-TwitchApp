import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  const user = {
    username: "Dalton",
    avatar:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0ed35a26-2358-48d7-a03d-a7bf4b08a64b-profile_image-70x70.png",
  };

  return (
    <div className='App'>
      {/* IF you want components to share the same data the parents MUST hold the data */}
      <Nav user={user} />
      <Home user={user} />
    </div>
  );
}

export default App;

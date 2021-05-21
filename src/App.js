import Nav from "./components/Nav/Nav";

import "./App.css";

function App() {
  const user = {
    username: "Dalton",
    avatar:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0ed35a26-2358-48d7-a03d-a7bf4b08a64b-profile_image-70x70.png",
  };

  return (
    <div className='App'>
      <Nav user={user} />
    </div>
  );
}

export default App;

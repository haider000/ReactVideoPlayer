// Libraries
import { Route } from "react-router-dom";
import { useState } from "react";

// Components
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export default function App() {
  // State for Video Queue
  const [videoQueue, setVideoQueue] = useState([]);

  return (
    <>
      <div className="min-vh-100">
        <Header videoQueue={videoQueue} setVideoQueue={setVideoQueue} />
        <Route path="/" exact>
          <Home videoQueue={videoQueue} />
        </Route>
        <Route path="/about" exact>
          <h1 className="p-5 text-center">About</h1>
          <p className="text-center">Under construction...</p>
        </Route>
        <Route path="/contact" exact>
          <h1 className="p-5 text-center">Contact</h1>
          <p className="text-center">Under construction...</p>
        </Route>
      </div>
    </>
  );
}

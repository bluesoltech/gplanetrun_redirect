import { useState } from "react";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Stat from "./components/Stat";

function App() {
  const [close, setClose] = useState(true);

  const handleClose = () => {
    // console.log("Clicked");
    setClose(false);
  };

  return (
    <div className="flex flex-col h-full w-full">
      {close && <Banner onClose={handleClose} />}
      <Hero />
      <Stat />
    </div>
  );
}

export default App;

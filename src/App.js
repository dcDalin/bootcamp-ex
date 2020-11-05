import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const country = "Philippines";

  const [greeting, setGreeting] = useState("Good morning");

  setTimeout(() => {
    setGreeting("Good afternoon");
  }, 3000);

  return (
    <div>
      <Header greeting={greeting} age="25" country={country} />
      <Body country={country} />
      <Footer country={country} town="Manila" />
    </div>
  );
}

export default App;

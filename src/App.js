import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const country = "Philippines";

  return (
    <div>
      <Header />
      <Body />
      <Footer country={country} town="Manila" />
    </div>
  );
}

export default App;

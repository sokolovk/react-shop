import {Header} from "./layout/header";
import {Main} from "./layout/main";
import {Footer} from "./layout/footer";
import {API_URL, API_KEY} from "./config";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

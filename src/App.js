import {Header} from "./layout/header";
import {Main} from "./layout/main";
import {Footer} from "./layout/footer";
import {ContextProvider} from "./context";

function App() {
  return (
    <div className="App">
      <Header />
        <ContextProvider>
            <Main />
        </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;

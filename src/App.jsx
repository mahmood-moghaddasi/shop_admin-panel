import TanstackQueryProvider from "./providers/TanstackQueryProvider";
import Router from "./Routes/Router";

function App() {
  return (
    <>
      <TanstackQueryProvider>
        <Router />
      </TanstackQueryProvider>
    </>
  );
}

export default App;

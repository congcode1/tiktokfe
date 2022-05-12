import { gapi } from "gapi-script";
import { useEffect } from "react";
import Pages from "./pages";

function App() {

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: "970775754411-trpfcsos0eom5fs9ssav274jo6vifoqh.apps.googleusercontent.com",
        scope: "",
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;

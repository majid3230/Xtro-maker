import React, { Suspense } from "react";
import routes from "./routes.jsx";
import Spinner from "./components/Spinner.jsx";

function App() {

  return (
    <Suspense fallback={<Spinner />}>
      {routes}
    </Suspense>
  );

}

export default App;

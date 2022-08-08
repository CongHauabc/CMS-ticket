
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { publicRouter } from "~/Routes";

import { Defaulayout } from "./component/Layout";


function App() {
  
  return (
    <Router>
      <div className="App" id="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Layout = route.layout || Defaulayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;

import{BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./comp/pg/Home";
import Layout from "./comp/pg/Layout";
import Rules from "./comp/pg/Rules";
import Contactus  from "./comp/pg/Contactus";
function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}  />
      <Route path="Rules"  element={<Rules/>}  />
      <Route path="Contactus"  element={<Contactus/>}  />
      </Route>
    </Routes>
  </BrowserRouter>


    </>
  
  );
}

export default App;

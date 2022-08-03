import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './comp/pg/Home';
import Layout from './comp/pg/Layout';
import Rules from './comp/pg/Rules';
import Contactus from './comp/pg/Contactus';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/valo_demo" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rules" element={<Rules />} />
            <Route path="contactus" element={<Contactus />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

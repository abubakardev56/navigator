import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route exact path = "/" element={<Home/>}/>
  <Route exact path = "/contact" element={<Contact/>}/>
  <Route exact path = "/about" element={<About/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;

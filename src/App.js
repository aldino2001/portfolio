import ContentFile from './Component/ContentFile';
import MyProject from './Component/myprojects';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './Style/HeroSection.css'

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ContentFile/>} />
        <Route  path="/my-project" element={<MyProject/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

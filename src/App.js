import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>x
        <Route path='/post/:id' element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;

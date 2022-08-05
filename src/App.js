import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import './styles/Main.scss';
import EditorPage from './pages/EditorPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/editor/:id' element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

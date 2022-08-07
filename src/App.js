import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import './styles/Main.scss';
import EditorPage from './pages/EditorPage';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <div className=''>
        <Toaster
          position='top-center'
          toastOptions={{
            theme: {
              primary: '$4aed88',
            },
            style: {
              fontSize: '2rem',
            },
          }}
        />
      </div>
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

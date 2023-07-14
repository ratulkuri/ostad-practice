import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import DefaultLayout from './layouts/DefaultLayout';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={'/*'} element={<DefaultLayout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

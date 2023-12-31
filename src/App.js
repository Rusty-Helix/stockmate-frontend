import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (

    <Router>
      <div className="App">
      <Header />
      {/* <NotesListPage /> */}

      <Routes>
        <Route path='/' element={<NotesListPage/>}/>
        <Route path='/note/:id' element={<NotePage/>}/>
      </Routes>

      </div>
    </Router>
  );
}

export default App;
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthRootComponent from './components/authRootComponent/AuthRootComponent'
import PrivateRouter from './utils/router/privateRouter'
import Home from './components/home/home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/register" element={<AuthRootComponent />} />
        <Route path="/login" element={<AuthRootComponent />} />
      </Routes>
    </div>
  )
}

export default App

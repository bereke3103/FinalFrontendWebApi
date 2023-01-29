import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthRootComponent from './components/authRootComponent/AuthRootComponent';
import PrivateRouter from './utils/router/privateRouter';
import CreatePost from './components/posts/CreatePost';
import UpdatePost from './components/posts/UpdatePost';
import MainPagePost from './components/posts/mainPagePost/MainPostPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/posts" element={<MainPagePost />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post" element={<UpdatePost />} />
        </Route>
        <Route path="/register" element={<AuthRootComponent />} />
        <Route path="/login" element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;

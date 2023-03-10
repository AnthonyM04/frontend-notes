import { Route, Routes } from 'react-router-dom';
import NewPost from './scenes/NewPost';
import Home from './scenes/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "xp.css/dist/XP.css";
import './App.css';


function App() {

  return (
    <>
      <Routes>
        {/* routes for each page.
        the 'create' path will send the user to NewPost to create a new post.
        route home will send the user to the homepage.
        route / and * will send the user to home as well.
        */}

        <Route path='create' element={<NewPost />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='*' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Messages from './components/Messages/Messages';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  const { posts }  = props;
  

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper__content">
          <Routes>
            <Route path='/' element={<Profile posts={posts} />} />
            <Route path='/messages/*' element={<Messages dialogs={props.dialogs} messages={props.messages} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

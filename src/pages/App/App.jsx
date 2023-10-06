import debug from 'debug';
import { useState } from 'react';
import NotePage from '../NotePage/NotePage';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from "../../utilities/users-service";

const log = debug('mern:src:App');
localStorage.debug = 'mern*';

log('Start React App')

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<NotePage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import MainPage from './pages/MainPage';

import ProfileExample from './pages/ProfileExample';
import BrenoProfile from './pages/profiles/BrenoProfile';
import JoaoProfile from './pages/profiles/JoaoProfile';

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>

          <Route element={<DefaultLayout />}>
            
            <Route path="/example" element={<ProfileExample/>}/>
            <Route path="/breno" element={<BrenoProfile/>}/>
            <Route path="/joao" element={<JoaoProfile/>}/>

          </Route>

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
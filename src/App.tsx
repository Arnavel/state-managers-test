import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { MobxPage } from './components/MobxPage';
import { EffectorPage } from './components/EffectorPage';

const App = () => {
  return (
    <div className="container">
      <Router>
        <div>
          <Navigation/>

          <Routes>
            <Route path="/" element={<MobxPage/>}/>
            <Route path="/effector" element={<EffectorPage/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

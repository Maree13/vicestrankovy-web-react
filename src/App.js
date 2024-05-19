import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comedy from './pages/Comedy';
import Serials from './pages/Serials';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import OneMovie from './components/OneMovie';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/comedy" element={<Comedy />} />
          <Route path="/serials" element={<Serials />} />
          <Route path="all-movies/:movieId" element={<OneMovie />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

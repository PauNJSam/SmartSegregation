import './App.css';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';

//layouts
import RootLayout from './layout/RootLayout';
import LandingPage from './pages/LandingPage';
import Tutorial from './pages/Tutorial';
import CheckPoints from './pages/CheckPoints';
import Admin from './pages/Admin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<LandingPage/>}></Route>
      <Route path='tutorial' element={<Tutorial/>}></Route>
      <Route path='checkPoints' element={<CheckPoints/>}></Route>
      <Route path='admin' element={<Admin/>}></Route>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

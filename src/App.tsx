import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import SembraNet from './components/pages/protectedRoutes/SembraNet'
import SembraTime from './components/pages/protectedRoutes/SembraTime'
import SembraCare from './components/pages/protectedRoutes/SembraCare'
import SembraSchool from './components/pages/protectedRoutes/SembraSchool';
import DashLogin from './components/pages/publicRoutes/DashLogin'
import RouteLayout from './components/common/RouteLayout';
import Auth from './components/common/Auth'
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route path="/" element={<DashLogin />} />
      {/* <Route path="/welcome" element={<Auth><Welcome /></Auth>} /> */}
      <Route path="/sembratime" element={<Auth><SembraTime /></Auth>} />
      <Route path="/sembranet" element={<Auth><SembraNet /></Auth>} />
      <Route path="/sembraschool" element={<Auth><SembraSchool /></Auth>} />
      <Route path="/sembracare" element={<Auth><SembraCare /></Auth>} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route >
  ))
  
  function App() {
    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    );
  }
  
  export default App;
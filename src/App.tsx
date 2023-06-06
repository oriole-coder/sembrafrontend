import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import {HStack,Select,Stack,SimpleGrid,Card,Heading,CardBody,CardHeader,Text
  ,Button,CardFooter} from "@chakra-ui/react";
import "./App.css";
import Auth from "./components/common/Auth";
import RouteLayout from './components/common/RouteLayout';
import NotFound from './components/pages/publicRoutes/NotFound';
import Login from './components/pages/publicRoutes/Login'
import Welcome from './components/pages/protectedRoutes/Welcome';
import SembraTime from './components/pages/protectedRoutes/SembraTime';
import SembraNet from './components/pages/protectedRoutes/SembraNet';
import SembraSchool from './components/pages/protectedRoutes/SembraSchool';
import SembraCare from './components/pages/protectedRoutes/SembraCare';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RouteLayout />}>
    <Route path="/" element={<SembraSchool />} />
    <Route path="/welcome" element={<Auth><Welcome /></Auth>} />
    <Route path="/sembratime" element={<Auth><SembraTime /></Auth>} />
    <Route path="/sembranet" element={<Auth><SembraNet /></Auth>} />
    <Route path="/sembraschool" element={<Auth><SembraSchool /></Auth>} />
    <Route path="/sembracare" element={<Auth><SembraCare /></Auth>} />
    <Route path="*" element={<NotFound />} />
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

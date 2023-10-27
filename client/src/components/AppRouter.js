import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const isAuth = false

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, element}) => {
        return <Route path={path} element={element} />
      })}

      {publicRoutes.map(({path, element}) => {
        return <Route path={path} element={element} />
      })}

      <Route path="*" element={
        <div><h2>404 Page not found</h2></div>
      } />
    </Routes>
  );
}

export default AppRouter;

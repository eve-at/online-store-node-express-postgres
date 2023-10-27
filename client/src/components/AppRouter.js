import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';

const AppRouter = () => {
  const {user} = useContext(Context)

  console.log(user);

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, element}) => {
        return <Route key={path} path={path} element={element} />
      })}

      {publicRoutes.map(({path, element}) => {
        return <Route key={path} path={path} element={element} />
      })}

      <Route path="*" element={
        <div><h2>404 Page not found</h2></div>
      } />
    </Routes>
  );
}

export default AppRouter;

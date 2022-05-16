import React from 'react';
import NavBar from './components/navBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/layouts/login';
import Users from './components/layouts/users';
import Main from './components/layouts/main';
import notFound from './components/notFound';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Route path="/404" exact component={notFound} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}
export default App;

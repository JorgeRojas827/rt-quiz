import React, { Fragment } from 'react'
// import { MainLayout } from './layouts/MainLayout';
import { Route, Switch, /* Redirect */} from 'react-router-dom';
import './app.scss'
// import { Menu } from './pages/Menu';
// import { Quiz } from './pages/Quiz';
// import { Stats } from './pages/Stats';
// import { Account } from './pages/Account';
// import { Leaderboard } from './pages/Leaderboard';
import { Login } from './pages/Login';

const App: React.FC = () => {
  return (
    <Fragment>
      <div className="container w-screen h-screen dark:bg-gray-900 dark:text-white">
        <Switch>
          <Route exact path = "/login">
            <Login />
          </Route>
        </Switch>
        {/* <MainLayout>
          <Switch>
              <Route exact path = "/">
                  <Menu />
              </Route>
              <Route exact path = "/quiz">
                  <Quiz />
              </Route>
              <Route exact path = "/stats">
                  <Stats />
              </Route>
              <Route exact path = "/account">
                  <Account />
              </Route>
              <Route exact path = "/leaderboard">
                  <Leaderboard />
              </Route>
          </Switch>
        <Redirect to = "/login"></Redirect>
        </MainLayout> */}
      </div>
    </Fragment>
  );
}

export default App;
import { Fragment } from 'react'
import { MainLayout } from './layouts/MainLayout';
import { Route, Switch, Redirect} from 'react-router-dom';
import './app.scss'
import { Menu } from './pages/Menu';
import { Quiz } from './pages/Quiz';
import { Stats } from './pages/Stats';
import { Account } from './pages/Account';
import { Leaderboard } from './pages/Leaderboard';

export default function App(): JSX.Element  {
  return (
    <Fragment>
      <div className="container w-screen h-screen dark:bg-gray-900 dark:text-white">
        <MainLayout>
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
              <Redirect to = "/"></Redirect>
          </Switch>
        </MainLayout>
      </div>
    </Fragment>
  );
}

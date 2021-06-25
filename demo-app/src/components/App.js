import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Layout } from './Layout';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { Menu } from './Menu';
import { Home } from './Home';
import { Sidebar } from './Sidebar';

import { ColorListContainer } from '../containers/ColorListContainer';
import { ColorFormContainer } from '../containers/ColorFormContainer';
import { CarToolContainer } from '../containers/CarToolContainer';

export const App = () => {
  return (
    <Router>
      <Layout>
        <ToolHeader headerText="App Tools" />
        <Menu />
        <main>
          <Switch>
            <Route path="/color-list">
              <ColorListContainer />
            </Route>
            <Route path="/color-form">
              <ColorFormContainer />
            </Route>
            <Route path="/car-tool">
              <CarToolContainer />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
        <Sidebar />
        <ToolFooter companyName="A Cool Company, Inc." />
      </Layout>
    </Router>
  );
};
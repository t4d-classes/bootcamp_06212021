import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { colorToolStore } from '../stores/colorToolStore';
import { carToolStore } from '../stores/carToolStore';
import { calcToolStore } from '../stores/calcToolStore';

import { Layout } from './Layout';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { Menu } from './Menu';
import { Home } from './Home';
import { Sidebar } from './Sidebar';

import { ColorListContainer } from '../containers/ColorListContainer';
import { ColorFormContainer } from '../containers/ColorFormContainer';
import { CarToolContainer } from '../containers/CarToolContainer';
import { CalcToolContainer } from '../containers/CalcToolContainerHooks';

export const App = () => {
  return (
    <Router>
      <Layout>
        <ToolHeader headerText="App Tools" />
        <Menu />
        <main>
          <Switch>
            <Route path="/color-list">
              <Provider store={colorToolStore}>
                <ColorListContainer />
              </Provider>
            </Route>
            <Route path="/color-form">
              <Provider store={colorToolStore}>
                <ColorFormContainer />
              </Provider>
            </Route>
            <Route path="/car-tool">
              <Provider store={carToolStore}>
                <CarToolContainer />
              </Provider>
            </Route>
            <Route path="/calc-tool">
              <Provider store={calcToolStore}>
                <CalcToolContainer />
              </Provider>
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
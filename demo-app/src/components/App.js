import { Layout } from './Layout';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { Menu } from './Menu';
import { Home } from './Home';
import { Sidebar } from './Sidebar';

export const App = () => {
  return (
    <Layout>
      <ToolHeader headerText="App Tools" />
      <Menu />
      <main>
        <Home />
      </main>
      <Sidebar />
      <ToolFooter companyName="A Cool Company, Inc." />
    </Layout>
  );
};
import { ReactNode } from 'react';
import { Grid } from '@material-ui/core';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';

export type CarToolLayoutProps = {
  children: ReactNode;
};

export function CarToolLayout({ children }: CarToolLayoutProps) {
  function CarToolHeader() {
    return <ToolHeader headerText="Car Tool" />;
  }
  function CarToolFooter() {
    return <ToolFooter companyName="A Cool Company, Inc." />;
  }

  return (
    <Grid container direction="column">
      <Grid item component={CarToolHeader} />
      <Grid item component="main">
        {children}
      </Grid>
      <Grid item component={CarToolFooter} />
    </Grid>
  );
}

import React, { memo } from 'react';

export const ToolHeader = memo(({ headerText }) => {

  console.log("rendered tool header");

  return (
    <header className="header-block">
      <h1 className="page-header">{headerText}</h1>
    </header>
  );

});

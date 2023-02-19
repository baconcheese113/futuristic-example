import React from 'react';
import { Button } from '@mui/material';
import { Layout } from '@futuristic-example/common';

export function App() {
  const [disabled, setDisabled] = React.useState(false);

  const handleClick = () => {
    setDisabled(true);
  };
  return (
    <Layout start>
      <Layout row>
        <Button variant="contained" disabled={disabled} onClick={handleClick}>
          Click Me
        </Button>
      </Layout>
      <Button variant="contained" disabled={disabled} onClick={handleClick}>
        NO, Click Me
      </Button>
    </Layout>
  );
}

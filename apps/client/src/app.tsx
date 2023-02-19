import React from 'react';
import { Button } from '@mui/material';

export function App() {
  const [disabled, setDisabled] = React.useState(false);

  const handleClick = () => {
    setDisabled(true);
  };
  return (
    <div>
      <Button sx={{ color: 'green' }} disabled={disabled} onClick={handleClick}>
        Click
      </Button>
    </div>
  );
}

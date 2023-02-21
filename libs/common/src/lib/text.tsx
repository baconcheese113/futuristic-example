import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

type Props = {
  header?: boolean;
  secondary?: boolean;
  value: string;
  children?: React.ReactNode;
} & TypographyProps;

export function Text(props: Props) {
  const { header, secondary, value, children, ...otherProps } = props;

  const color = React.useMemo(() => {
    if (secondary) return 'text.secondary';
    return undefined;
  }, [secondary]);

  const variant = React.useMemo(() => {
    if (header) return 'h5';
    return 'body2';
  }, [header]);

  return (
    <Typography color={color} variant={variant} {...otherProps}>
      {value}
      {children}
    </Typography>
  );
}

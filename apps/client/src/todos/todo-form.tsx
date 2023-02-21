import { useMutation } from '@apollo/client';
import { CSSObject } from '@emotion/react';
import { Layout, Text } from '@futuristic-example/common';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import React from 'react';

import { graphql } from '../gql';

const createTodoMutation = graphql(`
  mutation CreateTodoMutation($title: String!) {
    createTodo(title: $title) {
      ...todoCard_todo
    }
  }
`);

type Props = {
  sx?: CSSObject;
  onSubmit?: () => unknown;
};

export function TodoForm(props: Props) {
  const { sx, onSubmit } = props;

  const [createTodo, { loading, error }] = useMutation(createTodoMutation);

  const [newTodo, setNewTodo] = React.useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = async () => {
    await createTodo({ variables: { title: newTodo } });
    setNewTodo('');
    onSubmit?.();
  };

  return (
    <Layout center sx={sx}>
      <Text
        header
        value={newTodo.length ? 'Now press enter to submit' : 'Add A Todo!'}
      />
      <Layout row>
        <TextField
          disabled={loading}
          sx={{ minWidth: 500 }}
          variant="standard"
          value={newTodo}
          onChange={handleTextChange}
          onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <IconButton
          onClick={handleSubmit}
          disabled={loading || !newTodo.length}
        >
          <SendIcon />
        </IconButton>
      </Layout>
      {!!error && <Text secondary value={error.message} />}
    </Layout>
  );
}

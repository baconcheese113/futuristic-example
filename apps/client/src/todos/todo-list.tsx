import { useQuery } from '@apollo/client';
import { Empty, Layout } from '@futuristic-example/common';
import { CircularProgress, Grid } from '@mui/material';

import { graphql } from '../gql';
import { TodoCard } from './todo-card';
import { TodoForm } from './todo-form';

const todoListQueryDocument = graphql(`
  query todoListQuery {
    todos {
      ...todoCard_todo
      id
    }
  }
`);

export function TodoList() {
  const { loading, error, data, refetch } = useQuery(todoListQueryDocument);

  if (error) return <h2>{error.message}</h2>;
  if (loading || !data) return <CircularProgress />;

  return (
    <Layout center>
      <TodoForm sx={{ marginTop: 24 }} onSubmit={() => refetch()} />
      <Layout sx={{ marginTop: 24, maxWidth: '90%' }}>
        {!data.todos.length && <Empty title="No todos have been added" />}
        <Grid container spacing={3}>
          {data.todos.map((todo) => (
            <Grid key={todo.id} item sm={6} lg={4}>
              <TodoCard todo={todo} />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </Layout>
  );
}

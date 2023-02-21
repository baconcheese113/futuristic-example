import { useQuery } from '@apollo/client';
import { Layout, Text } from '@futuristic-example/common';
import { CircularProgress } from '@mui/material';

import { graphql } from './gql';
import { TodoCard } from './todo-card';

const todoListQueryDocument = graphql(`
  query todoListQuery {
    todos {
      ...todoCard_todo
      id
    }
  }
`);

type Props = {
  title?: string;
};

export function TodoList(props: Props) {
  const { title } = props;
  const { loading, error, data } = useQuery(todoListQueryDocument);

  if (error) return <h2>{error.message}</h2>;
  if (loading || !data) return <CircularProgress />;

  return (
    <Layout center>
      {!!title && <Text header value={title} />}
      {data.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </Layout>
  );
}

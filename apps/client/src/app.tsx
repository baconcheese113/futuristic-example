import { gql, useQuery } from '@apollo/client';
import { Layout } from '@futuristic-example/common';
import { Button } from '@mui/material';
import React from 'react';

export function App() {
  const [disabled, setDisabled] = React.useState(false);

  const handleClick = () => {
    setDisabled(true);
  };

  const { loading, error, data } = useQuery(gql`
    query ExampleQuery {
      todos {
        id
        title
        owner {
          id
          email
        }
      }
    }
  `);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>;

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
      <Layout flex>
        {data.todos.map((todo: { title: string }, idx: number) => (
          <h3 key={idx}>{todo.title}</h3>
        ))}
      </Layout>
    </Layout>
  );
}

import { Text } from '@futuristic-example/common';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardActions, CardContent, IconButton } from '@mui/material';

import { FragmentType, graphql, useFragment } from './gql';
import { TodoOwner } from './todo-owner';

const todoCard_todo = graphql(`
  fragment todoCard_todo on Todo {
    title
    owner {
      ...todoOwner_owner
    }
  }
`);

type Props = {
  todo: FragmentType<typeof todoCard_todo>;
};

export function TodoCard(props: Props) {
  const todo = useFragment(todoCard_todo, props.todo);

  const handleDelete = () => console.log('handleDelete');

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <TodoOwner owner={todo.owner} />
        <Text header value={todo.title} />
      </CardContent>
      <CardActions>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

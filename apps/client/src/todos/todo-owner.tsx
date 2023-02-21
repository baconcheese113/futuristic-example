import { Layout, Text } from '@futuristic-example/common';

import { FragmentType, graphql, useFragment } from '../gql';

const todoOwner_owner = graphql(`
  fragment todoOwner_owner on User {
    email
  }
`);

type Props = {
  owner: FragmentType<typeof todoOwner_owner>;
};

export function TodoOwner(props: Props) {
  const owner = useFragment(todoOwner_owner, props.owner);

  return (
    <Layout end>
      <Text secondary value={owner.email} />
    </Layout>
  );
}

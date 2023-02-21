import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { Layout } from './layout';
import { Text } from './text';

type Props = {
  title?: string;
};
export function Empty(props: Props) {
  const { title } = props;

  return (
    <Layout flex center>
      <RocketLaunchIcon sx={{ fontSize: 200 }} />
      <Text sx={{ fontSize: 36 }} value={title || 'Nothing yet'} />
    </Layout>
  );
}

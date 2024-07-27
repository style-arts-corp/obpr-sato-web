import { gql, useQuery } from '@apollo/client';
import { Stack, Typography } from '@mui/material';

export const indexPageQuery = gql`
  query todoPriority {
    priority {
      id
      order
      description
      name
    }
  }
`;

type Priority = {
  id: number;
  order: number;
  description: string;
  name: string;
};

const DemoTopPage: React.FC = () => {
  const { data, loading } = useQuery<{
    priority: Priority[];
  }>(indexPageQuery, {
    onError(error) {
      console.error(error);
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <>ローディング</>;
  if (data === undefined) return <>データが存在しません</>;

  return (
    <>
      {data.priority.map((p) => (
        <Stack key={p.id} direction="row">
          <Typography>{p.id}</Typography>
          <Typography>{p.name}</Typography>
          <Typography>{p.description}</Typography>
          <Typography>{p.order}</Typography>
        </Stack>
      ))}
    </>
  );
};

export default DemoTopPage;

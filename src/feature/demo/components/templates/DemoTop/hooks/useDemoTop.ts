import { gql, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';
import type { DemoTopProps } from '@/feature/demo/components/templates/DemoTop/DemoTop';

const indexPageQuery = gql`
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

type Return =
  | {
      rows: DemoTopProps['rows'];
      isLoading: false;
    }
  | {
      rows: undefined;
      isLoading: true;
    };

export const useDemoTop = (): Return => {
  const { enqueueSnackbar } = useSnackbar();

  const { data, loading } = useQuery<{
    priority: Priority[];
  }>(indexPageQuery, {
    onError(error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
      console.error(error);
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading)
    return {
      rows: undefined,
      isLoading: true,
    };

  return {
    rows: data?.priority ?? [],
    isLoading: false,
  };
};

import { Error401 } from '@/feature/error/components/templates/Error401';
import { Error403 } from '@/feature/error/components/templates/Error403';
import { Error404 } from '@/feature/error/components/templates/Error404';
import { Error500 } from '@/feature/error/components/templates/Error500';
import { ErrorDefaultPage } from '@/feature/error/components/templates/ErrorDefaultPage';
import type { ClientError } from '@/utils/clientError';

type ResponseErrorProps = {
  error: ClientError;
};

export const ErrorClientPage: React.FC<ResponseErrorProps> = ({ error }) => {
  const { message } = error;
  switch (error.statusCode) {
    case 401:
      return <Error401 message={message} />;
    case 403:
      return <Error403 message={message} />;
    case 404:
      return <Error404 message={message} />;
    case 500:
      return <Error500 message={message} />;
    default:
      return <ErrorDefaultPage />;
  }
};

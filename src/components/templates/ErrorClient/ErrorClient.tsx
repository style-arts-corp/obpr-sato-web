import { ErrorApplicationFallback } from '@/feature/error/components/templates/ErrorApplicationFallback';
import { ErrorClientPage } from '@/feature/error/components/templates/ErrorClientPage';
import { ClientError } from '@/utils/clientError';
import { isFailedFetchError } from './isFailedFetchError';

type ErrorProps = {
  error: Error;
};

export const ErrorClient: React.FC<ErrorProps> = ({ error }) => {
  if (isFailedFetchError(error.message)) {
    window.location.reload();

    return;
  }

  if (error instanceof ClientError) {
    return <ErrorClientPage error={error} />;
  }

  return <ErrorApplicationFallback />;
};

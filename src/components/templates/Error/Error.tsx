import { ErrorDefaultPage } from '@/feature/error/components/templates/ErrorDefaultPage';

type ErrorProps = {
  error: Error;
};

export const Error: React.FC<ErrorProps> = () => <ErrorDefaultPage />;

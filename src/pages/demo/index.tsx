import { DemoTop } from '@/feature/demo/components/templates/DemoTop/DemoTop';
import { useDemoTop } from '@/feature/demo/components/templates/DemoTop/hooks/useDemoTop';

const DemoTopPage: React.FC = () => {
  const { rows, isLoading } = useDemoTop();

  if (rows === undefined) return <>データが存在しません</>;

  return <DemoTop isLoading={isLoading} rows={rows} />;
};

export default DemoTopPage;

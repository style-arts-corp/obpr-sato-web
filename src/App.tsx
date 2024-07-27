import { AppProvider } from '@/providers/AppProvider';
import { AppRoutes } from '@/routes';

const App: React.FC = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);

export default App;

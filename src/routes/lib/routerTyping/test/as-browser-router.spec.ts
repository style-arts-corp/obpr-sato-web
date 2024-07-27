import { createBrowserRouter } from 'react-router-dom';
import { asBrowserRouter } from '@/routes/lib/routerTyping/as-browser-router';
import type { IRoutes } from '@/routes/lib/routerTyping/type/declare.type';

describe('as browser router', () => {
  const routes: IRoutes = [{}];
  try {
    createBrowserRouter(asBrowserRouter(routes));
  } catch (err) {
    if (err instanceof ReferenceError) {
      // expected. document is not defined in test context.
    } else {
      throw err;
    }
  }

  it('Fill-in-the-blanks for type testing', () => {
    expect(true).toBe(true);
  });
});

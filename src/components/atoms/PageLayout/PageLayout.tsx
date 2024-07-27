import type { PropsWithChildren } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BreadCrumbs } from '@/components/organisms/BreadCrumbs';
import { Header } from '@/components/organisms/Header';
import { NavSideBar } from '@/components/organisms/NavSideBar/NavSideBar';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main>
      <Stack direction="row">
        <NavSideBar />
        <Stack sx={{ width: '100%', minWidth: 0 }}>
          <Box p={1.5} sx={{ borderBottom: `1px solid grey` }}>
            <BreadCrumbs />
          </Box>
          <Box sx={{ px: 3, py: 2.5 }}>
            {children ?? (
              <Suspense fallback={<CircularProgress />}>
                <Outlet />
              </Suspense>
            )}
          </Box>
        </Stack>
      </Stack>
    </main>
  </>
);

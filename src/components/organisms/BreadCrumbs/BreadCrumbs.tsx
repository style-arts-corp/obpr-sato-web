import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useBreadCrumbs } from './useBreadCrumbs';

// NOTE: 後々削除予定のため、 organisms/BreadCrumbsV2 だけで完結するようにしている
//       このコンポーネント削除時は src/routes/lib/routesMeta/routesMeta の breadCrumbs も削除してください
export const BreadCrumbs: React.FC = () => {
  const breadCrumbs = useBreadCrumbs();

  return (
    <Stack columnGap={1} flexDirection="row">
      <NavLink
        style={(props) =>
          props.isActive
            ? {
                textDecoration: 'none',
                fontSize: '0.75rem',
                lineHeight: 1,
                pointerEvents: 'none',
                color: 'rgba(0, 0, 0, 0.6)',
              }
            : {
                textDecoration: 'none',
                fontSize: '0.75rem',
                lineHeight: 1,
              }
        }
        to="/"
        end
      >
        TOP
      </NavLink>
      {breadCrumbs.map((breadCrumb) => (
        <React.Fragment key={breadCrumb.path + breadCrumb.label}>
          <Typography
            sx={{
              color: 'text.secondary',
              lineHeight: 1,
              fontSize: '0.75rem',
            }}
          >
            {'>'}
          </Typography>

          {!breadCrumb.isAccessible ? (
            <Typography
              key={breadCrumb.path}
              sx={{
                color: 'text.secondary',
                fontSize: '0.75rem',
                lineHeight: 1,
              }}
            >
              {breadCrumb.label}
            </Typography>
          ) : (
            <Link
              style={{
                textDecoration: 'none',
                fontSize: '0.75rem',
                lineHeight: 1,
              }}
              to={breadCrumb.path}
            >
              {breadCrumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
};

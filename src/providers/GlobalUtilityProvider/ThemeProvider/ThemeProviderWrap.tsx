import type { PropsWithChildren } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';
import type { Shadows } from '@mui/material/styles/shadows';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';

import './global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { nativeSelectClasses } from '@mui/material/NativeSelect';
import { typographyClasses } from '@mui/material/Typography';

const theme = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  palette: {
    secondary: {
      main: '#e0e0e0',
    },
  },
  typography: {
    fontSize: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          minWidth: 'unset',
          ...(ownerState.variant === 'text' && {
            '&:hover': {
              backgroundColor: 'unset',
            },
          }),
        }),
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '1.25rem',
          fontWeight: 'bold',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: () => ({
          marginLeft: 0,
          [`& .${typographyClasses.root}`]: {
            fontSize: '0.75rem',
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
            {
              display: 'none',
            },
          [`& .${inputBaseClasses.root}.${inputBaseClasses.disabled}`]: {
            backgroundColor: theme.palette.secondary.main,
          },
          // NOTE: TextAreaの規定スタイル
          [`& .${inputBaseClasses.multiline}`]: {
            padding: 0,
          },
          // NOTE: TextFieldとTextAreaで共通のスタイル
          [`& .${inputBaseClasses.input}.${inputBaseClasses.inputSizeSmall}`]: {
            height: 20,
            fontSize: '0.75rem',
            padding: theme.spacing(0.5, 1),
          },
          // NOTE: inputAdornmentを持っている場合
          [`& .${inputBaseClasses.root} .${inputAdornmentClasses.root} .${typographyClasses.root}`]:
            {
              marginRight: '-14px',
            },
          // NOTE: sizeがsmallの場合はinputAdornmentの文字サイズを小さくする
          [`&:has(.${inputBaseClasses.input}.${inputBaseClasses.inputSizeSmall}) .${inputAdornmentClasses.root} .${typographyClasses.root}`]:
            {
              fontSize: '0.7rem',
            },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          [`&.${inputBaseClasses.inputSizeSmall}`]: {
            height: 20,
            fontSize: '0.75rem',
            padding: theme.spacing(0.5, 1),
          },
        }),
      },
    },
    MuiNativeSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          [`&.${nativeSelectClasses.multiple}`]: {
            overflowY: 'auto',
            height: 'auto',
            '&:hover': {
              borderColor: theme.palette.secondary.main,
            },
            [`&.${inputBaseClasses.inputSizeSmall}`]: {
              padding: theme.spacing(0.5),
              fontSize: '0.75rem',
            },
          },
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: ({ theme }) => ({
          [`& .${autocompleteClasses.inputRoot}.${inputBaseClasses.root}.${inputBaseClasses.sizeSmall}`]:
            {
              padding: 0,
              [`& .${autocompleteClasses.input}`]: {
                padding: theme.spacing(0.5, 1),
                fontSize: '0.75rem',
              },
            },
        }),
        popper: ({ theme }) => ({
          // TODO: 色をTextFieldのoutlineと合わせたい
          border: `1px solid ${theme.palette.secondary.main}`,
          [`& .${autocompleteClasses.listbox}`]: {
            fontSize: '0.7rem',
          },
        }),
      },
    },
  },
});

export const ThemeProviderWrap: React.FC<PropsWithChildren> = ({
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

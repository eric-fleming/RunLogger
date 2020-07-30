import { createMuiTheme } from '@material-ui/core/styles';

const colorTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#4791db',
            main: '#1976d2',
            dark: '#115293',
            contrastText: '#fff',
        },
        secondary: {
            light: '#e33371',
            main: '#dc004e',
            dark: '#9a0036',
            contrastText: '#000',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#000',
        },
        warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: '#000',
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#000',
        },
        success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: '#000',
        },
    },
});

export default colorTheme;
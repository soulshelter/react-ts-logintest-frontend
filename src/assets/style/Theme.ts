import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core/styles';
const muiTheme: MuiTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#222232',
        },
    },
});
export const theme = {
    ...muiTheme,
    app: {
        backgroundColor: '#222232',
    },
};
export type Theme = typeof theme;
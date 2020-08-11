import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import palette from '../../../utilities/colorPalette';


const CustomButton = (props) => {
    const { text, color, onClick, startIcon, endIcon} = props;

    const theme = createMuiTheme({
        overrides: {
            // Name of the component ⚛️ / style sheet
            MuiButton: {
                // Name of the rule
                text: {
                    // Some CSS
                    background: palette[color]['main'],
                    color: palette[color]['contrastText'],
                    '&:hover': {
                        backgroundColor: palette[color]['dark'],
                    },
                },
            },
        }
    });
    
    return (
        <MuiThemeProvider theme={theme}>
            <Button
                    onClick={onClick}
                    startIcon={startIcon}
                    endIcon={endIcon}>
                {text}
            </Button>
        </MuiThemeProvider>
    );
}

export default CustomButton;
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    borderRadius: "0.8rem",
                    boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08)"
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    height: "100%"
                }
            }
        }
    },
});

export const withTheme = (component: () => ReactNode) => () => (
    <ThemeProvider theme={theme}>
        {component()}
    </ThemeProvider>
)
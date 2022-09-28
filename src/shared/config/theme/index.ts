import { createTheme } from "@mui/material/styles";

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        link_title: true;
        link_caption: true;
        description: true;
    }
}

export const theme = createTheme({
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    borderRadius: "0.4rem",
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
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: "20px",
                    borderRadius: "8px",


                },
                outlined: {
                    color: "#0a66c2",
                    padding: "6px 16px",
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "inset 0 0 0 1px #0a66c2",

                    ":hover": {
                        backgroundColor: "rgba(112,181,249,0.2)",
                        border: "none",
                        boxShadow: "inset 0 0 0 2px #0a66c2",
                    }

                },
                text: {
                    color: "rgba(0,0,0,0.6)",
                    padding: "6px 8px",

                    ":hover": {
                        backgroundColor: "rgba(0,0,0,0.08)"
                    }
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                subtitle1: {
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "rgba(0,0,0,0.6)"
                },
            },
            variants: [
                {
                    props: { variant: "link_title" },
                    style: {
                        fontWeight: 700,
                        lineHeight: "24px",
                        fontSize: "16px",

                        ":hover": {
                            textDecoration: "underline"
                        }
                    }
                },
                {
                    props: { variant: "link_caption" },
                    style: {
                        lineHeight: "16px",
                        fontSize: "12px",
                        color: "rgba(0,0,0,0.6)",

                        ":hover": {
                            textDecoration: "underline"
                        }
                    }
                },
                {
                    props: { variant: "description" },
                    style: {
                        color: "rgba(0,0,0,0.6)",
                        lineHeight: "16px",
                        fontSize: "12px"
                    }
                }
            ]
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#ffffff"
                }
            }
        }
    },
});
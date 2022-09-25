import {GlobalStyles} from "shared/ui/global-styles";

const AppStyles = () => {
    return(
        <GlobalStyles
        styles={(theme) => ({
          body: {
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightLight,
            fontSize: theme.typography.fontSize,
            margin: theme.spacing(0),
            height: "100vh"
          },
          '#root': {
            height: '100vh',
            widht: '100%'
          },
        })}
    />
    );
}

export default AppStyles;
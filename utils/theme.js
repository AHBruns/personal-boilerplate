import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "rgba(252, 208, 161, 1)",
        trans1: "rgba(252, 208, 161, 0.75)",
        trans2: "rgba(252, 208, 161, 0.5)",
        trans3: "rgba(252, 208, 161, 0.25)"
      },
      secondary: {
        main: "rgba(177, 182, 149, 1)",
        trans1: "rgba(177, 182, 149, 0.75)",
        trans2: "rgba(177, 182, 149, 0.5)",
        trans3: "rgba(177, 182, 149, 0.25)"
      },
      error: {
        main: "rgba(109, 26, 54, 1)",
        trans1: "rgba(109, 26, 54, 0.75)",
        trans2: "rgba(109, 26, 54, 0.5)",
        trans3: "rgba(109, 26, 54, 0.25)"
      },
      background: {
        main: "rgba(83, 145, 126, 1)",
        trans1: "rgba(83, 145, 126, 0.75)",
        trans2: "rgba(83, 145, 126, 0.5)",
        trans3: "rgba(83, 145, 126, 0.25)"
      }
    }
  })
);

import { theme } from "../utils/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { SWRProviders } from "./SWRProviders";

export const RootProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SWRProviders>{children}</SWRProviders>
  </ThemeProvider>
);

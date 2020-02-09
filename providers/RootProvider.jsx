import { theme } from "../utils/theme";
import { ThemeProvider } from "@material-ui/core/styles";

export const RootProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

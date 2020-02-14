import { makeStyles, useTheme } from "@material-ui/core";

export const useGridStyles = () => {
  const theme = useTheme();
  return makeStyles(theme => ({
    standardHalfGutter: {
      padding: `${theme.spacing(1)}px`
    }
  }))(theme);
};

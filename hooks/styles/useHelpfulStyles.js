import { makeStyles, useTheme } from "@material-ui/core";

export const useHelpfulStyles = () => {
  const theme = useTheme();
  return makeStyles(theme => ({
    standardTopLevelPadding: {
      padding: `${theme.spacing(8)}px`
    },
    offWhiteBG: {
      backgroundColor: theme.palette.offWhite.main
    },
    slightGrowOnHover: {
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.01)",
        transition: "transform 0.3s ease"
      }
    },
    bold: {
      fontWeight: "bolder"
    }
  }))(theme);
};

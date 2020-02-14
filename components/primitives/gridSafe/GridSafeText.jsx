import { Typography, Grid } from "@material-ui/core";
import { useGridStyles } from "../../../hooks/styles/useGridStyles";

export const GridSafeText = ({
  variant,
  color,
  containerProps,
  containerClasses,
  textClasses,
  children,
  ...extraProps
}) => {
  if (variant === undefined)
    throw "required variant prop was not defined for GridSafeText";
  if (color === undefined)
    throw "required color prop was not defined for GridSafeText";

  const classes = useGridStyles();
  return (
    <Grid
      item
      container
      className={[classes.standardHalfGutter, ...(containerClasses || [])].join(
        " "
      )}
      {...containerProps}
    >
      <Typography
        fullWidth
        noWrap
        variant={variant}
        color={color}
        className={[...(textClasses || [])].join(" ")}
        {...extraProps}
      >
        {children}
      </Typography>
    </Grid>
  );
};

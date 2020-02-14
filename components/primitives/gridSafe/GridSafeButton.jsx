import { Button, Grid } from "@material-ui/core";
import { useGridStyles } from "../../../hooks/styles/useGridStyles";

export const GridSafeButton = ({
  variant,
  color,
  containerProps,
  containerClasses,
  buttonClasses,
  children,
  ...extraProps
}) => {
  if (variant === undefined)
    throw "required variant prop was not defined for GridSafeButton";
  if (color === undefined)
    throw "required color prop was not defined for GridSafeButton";

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
      <Button
        fullWidth
        variant={variant}
        color={color}
        className={[...(buttonClasses || [])].join(" ")}
        {...extraProps}
      >
        {children}
      </Button>
    </Grid>
  );
};

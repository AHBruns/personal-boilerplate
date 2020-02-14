import { TextField, Grid } from "@material-ui/core";
import { useGridStyles } from "../../../hooks/styles/useGridStyles";

export const GridSafeTextField = ({
  variant,
  label,
  prefix,
  shrunk,
  containerProps,
  containerClasses,
  textFieldClasses,
  children,
  ...extraProps
}) => {
  if (variant === undefined)
    throw "required variant prop was not defined for GridSafeTextField";
  if (label === undefined)
    throw "required label prop was not defined for GridSafeTextField";

  const classes = useGridStyles();
  return (
    <Grid
      item
      container
      className={[classes.standardHalfGutter, ...(containerClasses || [])].join(
        " "
      )}
      xs={12}
      {...containerProps}
    >
      <TextField
        fullWidth
        variant={variant}
        label={label}
        className={[...(textFieldClasses || [])].join(" ")}
        {...extraProps}
      ></TextField>
    </Grid>
  );
};

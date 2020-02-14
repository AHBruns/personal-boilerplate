import { Grid, InputAdornment, Paper, Container } from "@material-ui/core";
import { GridSafeButton } from "../components/primitives/gridSafe/GridSafeButton";
import { GridSafeTextField } from "../components/primitives/gridSafe/GridSafeTextField";
import { GridSafeText } from "../components/primitives/gridSafe/GridSafeText";
import { useDummyAPI } from "../hooks/requests/useDummyAPI";
import { ObjectTree } from "../components/ObjectTree";
import { useGridStyles } from "../hooks/styles/useGridStyles";
import { useHelpfulStyles } from "../hooks/styles/useHelpfulStyles";

export default () => {
  // const { data, error, isValidating, revalidate } = useDummyAPI();
  const gridClasses = useGridStyles();
  const helpfulClasses = useHelpfulStyles();

  return (
    <Container
      className={[
        helpfulClasses.standardTopLevelPadding,
        helpfulClasses.slightGrowOnHover
      ].join(" ")}
      maxWidth="md"
    >
      <Grid
        container
        className={[
          gridClasses.standardHalfGutter,
          helpfulClasses.offWhiteBG
        ].join(" ")}
        component={Paper}
        elevation={20}
      >
        <GridSafeText
          variant="h1"
          color="secondary"
          textClasses={[helpfulClasses.bold]}
        >
          FORM TITLE
        </GridSafeText>
        <GridSafeTextField
          variant="outlined"
          color="secondary"
          label="Label"
          type="number"
          containerProps={{ xs: 6 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            shrink: true
          }}
          textFieldClasses={[helpfulClasses.slightGrowOnHover]}
        />
        <GridSafeTextField
          variant="outlined"
          color="secondary"
          label="Label"
          type="number"
          containerProps={{ xs: 6 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">Z</InputAdornment>,
            shrink: true
          }}
          textFieldClasses={[helpfulClasses.slightGrowOnHover]}
        />
        <GridSafeTextField
          variant="outlined"
          color="secondary"
          label="Label"
          containerProps={{ xs: 6 }}
          textFieldClasses={[helpfulClasses.slightGrowOnHover]}
        />
        <GridSafeTextField
          variant="outlined"
          color="secondary"
          label="Label"
          containerProps={{ xs: 6 }}
          textFieldClasses={[helpfulClasses.slightGrowOnHover]}
        />
        <GridSafeTextField
          multiline
          variant="outlined"
          color="secondary"
          label="Label"
          textFieldClasses={[helpfulClasses.slightGrowOnHover]}
        />

        {/* {(error || data !== undefined) && (
          <GridSafeButton
            variant="contained"
            color="primary"
            onClick={revalidate}
            containerProps={{ xs: 3 }}
            buttonClasses={[helpfulClasses.slightGrowOnHover]}
          >
            {error ? "Try Again" : "Refresh"}
          </GridSafeButton>
        )} */}
        {/* <Grid item container className={gridClasses.standardHalfGutter}>
          {error ? (
            JSON.stringify(error)
          ) : data !== undefined ? (
            <ObjectTree object={data} />
          ) : (
            <></>
          )}
        </Grid> */}
      </Grid>
    </Container>
  );
};

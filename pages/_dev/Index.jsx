import Head from "next/head";
import {
  useTheme,
  Divider,
  Typography,
  List,
  ListItem,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { makePageTitle } from "../../utils/helpers";

const useStyles = makeStyles(theme => ({
  basicMargin: {
    padding: `${theme.spacing(8)}px`
  },
  inlineCode: {
    fontFamily: "Source Code Pro"
  },
  break: {
    height: `${theme.spacing(2)}px`
  }
}));

export default () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <Head>
        <title>{makePageTitle("Development Home")}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container key={uuid()} className={classes.basicMargin} maxWidth="xl">
        <Typography key={uuid()} variant="h5">
          Explainer
        </Typography>
        <Divider key={uuid()} />
        <div key={uuid()} className={classes.break} />
        <Typography key={uuid()} variant="body1">
          The{" "}
          <code key={uuid()} className={classes.inlineCode}>
            /_dev/*
          </code>{" "}
          paths contain development tools. Below is a list of all the available
          tools.
        </Typography>
        <List key={uuid()}>
          <ListItem
            key={uuid()}
            button
            component="a"
            href="/_dev/palette"
            target="_blank"
          >
            <Typography key={uuid()} variant="body1">
              Palette Explorer
            </Typography>
          </ListItem>
        </List>
      </Container>
    </>
  );
};

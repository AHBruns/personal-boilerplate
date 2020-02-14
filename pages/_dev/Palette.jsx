import Head from "next/head";
import { TreeItem } from "@material-ui/lab";
import {
  useTheme,
  Divider,
  Typography,
  List,
  ListItem,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaSquare } from "react-icons/fa";
import uuid from "uuid/v4";
import { makePageTitle } from "../../utils/helpers";
import { ObjectTree } from "../../components/ObjectTree";

const useStyles = makeStyles(theme => ({
  basicMargin: {
    padding: `${theme.spacing(8)}px`
  },
  break: {
    height: `${theme.spacing(2)}px`
  },
  preBlock: {
    margin: `${theme.spacing(2)}px`,
    borderRadius: "4px",
    fontFamily: "Source Code Pro",
    border: "1px solid black",
    borderRadius: "4px",
    padding: "4px 10px",
    overflowX: "scroll"
  },
  colorString: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "4px"
  }
}));

export default () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const customLiteralToTreeItem = literal => {
    switch (typeof literal) {
      case "function":
        return (
          <>
            <Head>
              <link
                href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap"
                rel="stylesheet"
              />
            </Head>
            <TreeItem
              key={uuid()}
              nodeId={uuid()}
              label={
                <pre className={`${classes.preBlock}`}>
                  <code className={`language-javascript ${classes.codeBlock}`}>
                    {literal.toString()}
                  </code>
                </pre>
              }
            />
          </>
        );
      case "string": {
        if (
          literal.startsWith("#") ||
          (literal.startsWith("rgb(") && literal.endsWith(")")) ||
          (literal.startsWith("rgba(") && literal.endsWith(")"))
        )
          return (
            <>
              <div className="colored">
                <TreeItem
                  key={uuid()}
                  nodeId={uuid()}
                  label={
                    <div className={classes.colorString}>
                      <FaSquare />
                      &nbsp;&nbsp;
                      {literal}
                    </div>
                  }
                />
              </div>
              <style jsx>{`
                .colored {
                  color: ${literal};
                }
              `}</style>
            </>
          );
        return <TreeItem key={uuid()} nodeId={uuid()} label={literal} />;
      }
      default:
        return (
          <TreeItem key={uuid()} nodeId={uuid()} label={literal.toString()} />
        );
    }
  };

  return (
    <>
      <Head>
        <title>{makePageTitle("Palette")}</title>
      </Head>
      <Container key={uuid()} className={classes.basicMargin} maxWidth="xl">
        <Typography key={uuid()} variant="h5">
          Explainer
        </Typography>
        <Divider key={uuid()} />
        <div key={uuid()} className={classes.break} />
        <Typography key={uuid()} variant="body1">
          Below is the global MaterialUI theme object used throughout this
          project. Any styles which are used in more than one place or are
          expected to be used in more than one place throughout this codebase
          should be defined via this theme object rather than via in-line
          styles. When injecting one-off styles, developers should prefer the
          following solutions in order of best to worst.
        </Typography>
        <List key={uuid()}>
          <ListItem key={uuid()}>
            <Typography key={uuid()} variant="body1">
              Material-UI's makeStyles
            </Typography>
          </ListItem>
          <ListItem key={uuid()}>
            <Typography key={uuid()} variant="body1">
              Styled JSX
            </Typography>
          </ListItem>
          <ListItem key={uuid()}>
            <Typography key={uuid()} variant="body1">
              Style Props
            </Typography>
          </ListItem>
          <ListItem key={uuid()}>
            <Typography key={uuid()} variant="body1">
              One-off Stylesheets
            </Typography>
          </ListItem>
        </List>
        <Typography key={uuid()} variant="body1">
          Additionally, if you feel that something about these coding and design
          guidelines should be changed, you are encouraged to bring it up at the
          next team stand-up. This is a living document and can/will be changed
          to fit the needs of the developers working with it.
        </Typography>
        <div key={uuid()} className={classes.break} />
        <Typography key={uuid()} variant="h5">
          Theme
        </Typography>
        <Divider key={uuid()} />
        <div key={uuid()} className={classes.break} />
        <ObjectTree
          key={uuid()}
          object={theme}
          customLiteralToTreeItem={customLiteralToTreeItem}
        />
      </Container>
    </>
  );
};

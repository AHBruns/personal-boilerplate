import Head from "next/head";
import { TreeItem } from "@material-ui/lab";
import { useTheme, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import uuid from "uuid/v4";
import { makePageTitle } from "../../utils/helpers";
import { ObjectTree } from "../../components/ObjectTree";

const useStyles = makeStyles({
  wrapper: {
    padding: "32px"
  },
  header: {},
  preBlock: {
    margin: "16px",
    borderRadius: "4px",
    fontFamily: "Source Code Pro",
    border: "1px solid black",
    borderRadius: "4px",
    padding: "4px 10px",
    overflowX: "scroll"
  }
});

export default () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{makePageTitle("Palette")}</title>
      </Head>
      <div className={classes.wrapper}>
        <Typography variant="h5">Explainer</Typography>
        <Divider />
        <Typography variant="body1">
          Below is the global MaterialUI theme object used throughout this
          project. Any styles which are used in more than one place or are
          expected to be used in more than one place throughout this codebase
          should be defined via this theme object rather than via in-line
          styles. When injecting one-off styles, developers should use this
          preference order:
          <ol>
            <li>MaterialUI makeStyles</li>
            <li>jss</li>
            <li>style props</li>
          </ol>
        </Typography>
        <Typography variant="h5">Theme</Typography>
        <Divider />
        <ObjectTree
          object={theme}
          customLiteralToTreeItem={literal => {
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
                      nodeId={uuid()}
                      label={
                        <pre className={`${classes.preBlock}`}>
                          <code
                            className={`language-javascript ${classes.codeBlock}`}
                          >
                            {literal.toString()}
                          </code>
                        </pre>
                      }
                    />
                  </>
                );
              case "string": {
                if (literal.startsWith("rgba(") && literal.endsWith(")"))
                  return (
                    <>
                      <div className="rgba-wrapper">
                        <TreeItem nodeId={uuid()} label={literal} />
                      </div>
                      {/*
                       * Using jss because it's the cleanest way to inject these styles.
                       * makeStyles doesn't work because it's a hook & style prop is highly discouraged
                       */}
                      <style jsx>{`
                        .rgba-wrapper {
                          color: ${literal};
                        }
                      `}</style>
                    </>
                  );
                return <TreeItem nodeId={uuid()} label={literal} />;
              }
              default:
                return <TreeItem nodeId={uuid()} label={literal.toString()} />;
            }
          }}
        />
      </div>
    </>
  );
};

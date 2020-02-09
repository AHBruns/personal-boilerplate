import { TreeView, TreeItem } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { MdExpandMore, MdChevronRight } from "react-icons/md";
import uuid from "uuid/v4";

const useStyles = makeStyles({
  treeView: {
    marginLeft: "-9px"
  }
});

const defaultLiteralToTreeItem = literal => {
  switch (typeof literal) {
    case "function":
      return (
        <TreeItem
          nodeId={uuid()}
          label={<pre class="prettyprint">{literal.toString()}</pre>}
        />
      );
    default:
      return <TreeItem nodeId={uuid()} label={literal.toString()} />;
  }
};

const objectToTreeItem = (object, literalToTreeItem) =>
  Object.entries(object).map(([key, value]) => (
    <TreeItem nodeId={uuid()} label={key.toString()}>
      {toTreeItems(value, literalToTreeItem)}
    </TreeItem>
  ));

const toTreeItems = (thing, customLiteralToTreeItem) => {
  let literalToTreeItem =
    customLiteralToTreeItem === undefined
      ? defaultLiteralToTreeItem
      : customLiteralToTreeItem;

  if (typeof thing === "object") {
    // don't render empty objects
    if (JSON.stringify(thing) === "{}") return <></>;
    else return objectToTreeItem(thing, literalToTreeItem);
  } else return literalToTreeItem(thing);
};

export const ObjectTree = ({ object, customLiteralToTreeItem, className }) => {
  const classes = useStyles();
  return (
    <TreeView
      defaultCollapseIcon={<MdExpandMore />}
      defaultExpandIcon={<MdChevronRight />}
      className={classes.treeView}
    >
      {toTreeItems(object, customLiteralToTreeItem)}
    </TreeView>
  );
};

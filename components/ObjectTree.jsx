import { TreeView, TreeItem } from "@material-ui/lab";
import { MdExpandMore, MdChevronRight } from "react-icons/md";
import uuid from "uuid/v4";

const defaultLiteralToTreeItem = literal => {
  switch (typeof literal) {
    case "function":
      return (
        <TreeItem
          key={uuid()}
          nodeId={uuid()}
          label={<pre class="prettyprint">{literal.toString()}</pre>}
        />
      );
    default:
      return (
        <TreeItem key={uuid()} nodeId={uuid()} label={literal.toString()} />
      );
  }
};

const objectToTreeItem = (object, literalToTreeItem) => {
  if (object === null || object === undefined) {
    return <></>;
  } else if (Array.isArray(object)) {
    return Object.values(object).map(value =>
      toTreeItems(value, literalToTreeItem)
    );
  } else {
    return Object.entries(object).map(([key, value]) => (
      <TreeItem key={uuid()} nodeId={uuid()} label={key.toString()}>
        {toTreeItems(value, literalToTreeItem)}
      </TreeItem>
    ));
  }
};

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

export const ObjectTree = ({ object, customLiteralToTreeItem }) => {
  return (
    <TreeView
      defaultCollapseIcon={<MdExpandMore />}
      defaultExpandIcon={<MdChevronRight />}
    >
      {toTreeItems(object, customLiteralToTreeItem)}
    </TreeView>
  );
};

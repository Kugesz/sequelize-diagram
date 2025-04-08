import * as path from "path";

import getDBFolder from "./getDBFolder";
import getPaths from "./getPaths";
import loadAllModel from "./loadAllModel";
import tableExtraction from "./tableExtraction";

// const root = path.join(__dirname, "..", "..");
const root = path.join(__dirname, "..", "test");

const main = async () => {
  const dbFolder = getDBFolder(root);
  console.log("got folder");
  if (!dbFolder) {
    throw new Error("Coudnt finde folder named database!");
  }

  const modelFolderPath = path.join(dbFolder, "model");
  console.log(modelFolderPath);
  const modelPaths = getPaths(modelFolderPath);

  const models = await loadAllModel(modelPaths);

  const datas = [];

  for (const model of Object.values(models)) {
    datas.push(tableExtraction(model));
  }

  console.log(datas);
};

main();
console.log("exit");

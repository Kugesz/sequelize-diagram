import * as path from "path";

import getDBFolder from "./getDBFolder";
import getPaths from "./getPaths";
import loadAllModel from "./loadAllModel";
import tableExtraction from "./tableExtraction";

import { writeFileSync } from "fs";
import Table from "./classes/Table";
import TableRepo from "./TableRepo";

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
  const modelData = [];

  for (const model of Object.values(models)) {
    modelData.push(tableExtraction(model));
  }

  // console.log(Object.values(models[0]));
  const data = models.map((model, index) => {
    return {
      name: Object.values(model),
      rows: modelData[index],
    };
  });
  console.log(modelData);
  const tableRepo = new TableRepo(data);
  tableRepo.writeToConsole();
  tableRepo.generateXml();
};
main();
console.log("exit");

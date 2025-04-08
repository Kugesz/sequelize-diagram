import * as fs from "fs";
import * as path from "path";

const getAllFilePaths = (dir: string): string[] => {
  const files = fs.readdirSync(dir);
  let filePaths: string[] = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      filePaths = filePaths.concat(getAllFilePaths(filePath));
    } else {
      filePaths.push(filePath);
    }
  });

  return filePaths;
};

export default getAllFilePaths;

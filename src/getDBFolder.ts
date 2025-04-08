import * as fs from "fs";
import * as path from "path";

/**
 * Recursively searches for a folder named "database" in the given directory.
 * @param startPath The directory to start searching from.
 * @returns The path to the "database" folder if found, otherwise null.
 */
const findDatabaseFolder = (startPath: string): string | null => {
  if (!fs.existsSync(startPath)) {
    console.error(`The path "${startPath}" does not exist.`);
    return null;
  }

  const filesAndFolders = fs.readdirSync(startPath);

  for (const fileOrFolder of filesAndFolders) {
    const fullPath = path.join(startPath, fileOrFolder);

    if (fs.statSync(fullPath).isDirectory()) {
      if (fileOrFolder === "database") {
        return fullPath;
      }

      const result = findDatabaseFolder(fullPath);
      if (result) {
        return result;
      }
    }
  }

  return null;
};

export default findDatabaseFolder;

import { existsSync, rmSync } from "fs";
import { join } from "path";

const dirsToRemove = ["build", "node_modules"];

dirsToRemove.forEach((dir) => {
  const fullPath = join(__dirname, "..", dir);
  if (existsSync(fullPath)) {
    rmSync(fullPath, { recursive: true, force: true });
    console.log(`Removed ${dir}`);
  }
});

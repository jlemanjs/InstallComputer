import * as fs from "fs";
import { exec } from "child_process";

console.log(__dirname);

interface Collection {
  files: string[];
  source: string;
  dest: string;
};

const fileEnvBack: Collection = {
  files: [".env"],
  source: "/home/corbofo/dev/logistic-rdv/",
  dest: "/home/corbofo/devBis/logistic-rdv/",
};
checkDiff(fileEnvBack);

const fileEnvFront: Collection = {
  files: [".env", ".env.production"],
  source: "/home/corbofo/dev/logistic-rdv/client/",
  dest: "/home/corbofo/devBis/logistic-rdv/client/",
};
checkDiff(fileEnvFront);

function showStats(filename: string) {
  fs.stat(filename, (err, stats) => {
    console.log(stats.mtime);
  });
}

function showDiff(a: string, b: string) {
  exec("diff " + a + " " + b, (err, stdout, stderr) => {
    console.log(stdout);
    if (stderr) {
      console.error(stderr);
    }
  });
}

function checkDiff(collection: Collection) {
  for (const file of collection.files) {
    const filenameA = collection.source + file;
    const filenameB = collection.dest + file;
    const a = fs.readFileSync(filenameA).toString();
    const b = fs.readFileSync(filenameB).toString();
    if (a !== b) {
      console.error(
        file + " is not equals in " + collection.source + " " + collection.dest
      );
      showStats(filenameA);
      showStats(filenameB);
      showDiff(filenameA, filenameB);
    }
  }
}

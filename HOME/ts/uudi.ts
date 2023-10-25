import { v4 as uuidv4 } from "uuid";

let myuuid = uuidv4();

console.log(myuuid);
console.log(myuuid.length);

const date = new Date(1697042700 * 1000);

console.log(date.toString());
console.log(date.toLocaleString("fr"));
console.log(date.toLocaleString("us"));
console.log(date.toLocaleString("en"));
console.log(date.toISOString());

function expendDate(dateElements: string[]) {
  const date = dateElements.join("");
  //Propose a code to insert a '-' between 3 first elements of date string, first element is 4 chars, second 2 chars and 3rd 2 chars
  const code =
    date.substring(0, 4) +
    "-" +
    date.substring(4, 6) +
    "-" +
    date.substring(6, 8);
  //Propose a code to continue on data string with a ':' separator between 3 next elements 2 chars long each
  const codeWithSeparator =
    code +
    "T" +
    date.substring(8, 10) +
    ":" +
    date.substring(10, 12) +
    ":" +
    date.substring(12, 14);
  let ret = codeWithSeparator;
  if (date.length > 14) {
    ret += "." + date.substring(14);
  }
  console.log(ret);
  return ret;
}

console.log(new Date(expendDate(["20231018132046010"])).toLocaleString("us"));
console.log(
  new Date(expendDate("20230616_080150950".split("_"))).toLocaleString("us")
);
console.log(
  new Date(expendDate(["20231018132046010"]) + "Z").toLocaleString("us")
);
console.log(
  new Date(expendDate("20230616_080150950".split("_")) + "Z").toLocaleString(
    "us"
  )
);

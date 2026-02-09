import fs from "fs";

const jsonString = fs.readFileSync("./lab_2_firewall_log.json", "utf-8");
const logEntries = JSON.parse(jsonString);

console.log(logEntries.length);
// console.log(logEntries[0].keys());

// for (const [key, value] of Object.entries(logEntries[0])) {
//   console.log(`${key}`);
// }

// time stamp of last and first event
console.log("Unsorted first event");
console.log(logEntries[0]["@timestamp"]);
console.log(logEntries[0].timestamp);
console.log("Unsorted last event");
console.log(logEntries[logEntries.length - 1]["@timestamp"]);
console.log(logEntries[logEntries.length - 1].timestamp);

// sort by timestamp
logEntries.sort((a: any, b: any) => {
  return (
    new Date(a["@timestamp"]).getTime() - new Date(b["@timestamp"]).getTime()
  );
});

console.log("Sorted first event");
console.log(logEntries[0]["@timestamp"]);
console.log(logEntries[0].timestamp);
console.log("Sorted last event");
console.log(logEntries[logEntries.length - 1]["@timestamp"]);
console.log(logEntries[logEntries.length - 1].timestamp);

// basic analytics
// totat number of events
// all unique keys
// and how many times a key appears across all events
const uniqueKeys: Set<string> = new Set();
const keyCount: { [key: string]: number } = {};

for (const entry of logEntries) {
  for (const key of Object.keys(entry)) {
    uniqueKeys.add(key);
    if (key in keyCount) {
      keyCount[key] += 1;
    } else {
      keyCount[key] = 1;
    }
  }
}

console.log("Total number of events:", logEntries.length);
console.log("Total unique keys:", uniqueKeys.size);
console.log("Key appearance counts:", keyCount);

import { createInterface } from 'readline';
import { readFileSync } from 'fs';

// Read package.json
const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));

// Create an interface.
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Accumulate the changelogs.
const changelog: { [key: string]: string}[] = [];

// When reading a line.
let isFirst = true;
rl.on('line', (line: string): void => {
  // Parse the entry.
  const json = JSON.parse(line);

  // First time does not have the tag version.
  if (isFirst) {
    // Update the decoration.
    const split: string[] = json.decoration
      .split(',');
    split.splice(1, 0, ` tag: v${packageJson.version}`);
    json.decoration = split.join(',');

    // No first anymore.
    isFirst = false;
  }

  // Add the entry.
  changelog.push(json);
})

// When closing, generate the file.
rl.on('close', (): void => {
  console.log(JSON.stringify(changelog));
})
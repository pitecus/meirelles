import { createInterface } from 'readline';

// Create an interface.
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Accumulate the changelogs.
const changelog: { [key: string]: string}[] = [];

// When reading a line.
rl.on('line', (line: string): void => {
  changelog.push(JSON.parse(line));
})

// When closing, generate the file.
rl.on('close', (): void => {
  console.log(JSON.stringify(changelog));
})
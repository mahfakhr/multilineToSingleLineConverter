const fs = require('fs');
const readLine = require('readline');

async function startConvert() {
  let str = '';
  await new Promise((resolve) => {
    const lineReader = readLine.createInterface({
      input: fs.createReadStream('env.txt')
    });
    lineReader.on('line', (line) => {
      str = str + line + '\\n';
    });
    lineReader.on('close', () => {
      resolve();
    });
  });
  fs.truncateSync('./env.txt');
  const fileContentdist = str.replace(/"/g, '\\"');
  fs.appendFileSync('env.txt', fileContentdist);
}

startConvert();

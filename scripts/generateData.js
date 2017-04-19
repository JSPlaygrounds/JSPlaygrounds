#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const playgroundsPath = path.join(__dirname, '..', 'playgrounds');
const playgrounds = fs.readdirSync(playgroundsPath);

const data = playgrounds.map((playground) => {
  const playgroundPath = path.join(playgroundsPath, playground);
  // eslint-disable-next-line
  const config = require(path.join(playgroundPath, 'playground.json'));

  return {
    path: playground,
    name: config.name,
    description: config.description,
  };
});

const dest = path.join(__dirname, '..', 'out', 'data', 'playgrounds.json');
fs.writeFileSync(dest, JSON.stringify(data), 'utf8');

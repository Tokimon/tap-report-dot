#!/usr/bin/env node

const dot = require('./dot-pipe')();

process.stdin
  .pipe(dot)
  .pipe(process.stdout);

process.on('exit', (status) => {
  if(dot.failed || status === 1) { process.exit(1); }
});

#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');

const {
  reverse,
  csvToJSON
} = require('./index');

const questions = [
  {
    type: 'input',
    name: 'length',
    message: 'Max length'
  },
  {
    type: 'input',
    name: 'string',
    message: 'String to reverse'
  },
];

program
  .version('1.0.0')
  .description('Convert CSV to JSON, Reverse string');

program
  .command('convert')
  .alias('c')
  .description('Convert CSV file to JSON')
  .option('-n, --nameJSON', 'Name of output file')
  .option('-f, --fileCSV', 'Input file')
  .action(function (cmdObj) {
    const  [nameJSON, fileCSV] = cmdObj.args;
    csvToJSON(nameJSON, fileCSV);
  })


program
  .command('reverse')
  .alias('r')
  .description('Reverse a string')
  .action(() => {
    prompt(questions).then(answers => console.log(reverse(answers)))
  });

program.on('--help', () => {
  console.log('');
  console.log('Example call:');
  console.log('  $ agm-backend convert -n file1 -f file1');
  console.log('  $ agm-backend reverse');
});

program.parse(process.argv);

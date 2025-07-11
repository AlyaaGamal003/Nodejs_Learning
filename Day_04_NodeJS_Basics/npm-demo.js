import chalk from 'chalk';
console.log(chalk.red('Hello world!'));
function printChalk(){
  console.log(chalk.blue("Hello Node JS"));
  console.log(
  "CPU: "+chalk.red('90%')+"\n"+
  "RAM: "+chalk.green('40%')+"\n"+
  "DISK: "+chalk.yellow('70%'));
  console.log(
    chalk.green(
      'I am a green line ' +
      chalk.blue.underline.bold('with a blue substring') +
      ' that becomes green again!'
    )
  );
  console.log(chalk.blue('Hello', chalk.underline.bgRed('world') + '!'))
}
printChalk();
const program = require('commander');
const pkg = require("../package.json");
const createInitCommand = require('../untis/InitCommand');
module.exports = (args) => {

  program
    .name(Object.keys(pkg.bin)[0])
    .usage('<command> [options]')
    .version(pkg.version)
    .option('-d, --debug', '是否开启调试模式', false)

  createInitCommand(program);
  // program
  //   .command('init [name]')
  //   .description('初始化项目')
  //   .usage('<command> [options]')
  //   .option('-f, --force', '是否直接覆盖', false)
  //   .action(() => {
  //     console.log('init ...')
  //   })

  // 解析参数
  program
    .parse(process.argv)
};

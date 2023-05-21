// 初始化命令行
const Command = require("./Command");

class InitCommand extends Command {
  get command() {
    return 'init [name]';
  }

  get description() {
    return '初始化项目';
  }

  get options() {
    return [
      ['-f, --force', '是否强制更新', false],
      ['-t, --type <type>', '项目类型(值：project/page)'],
      ['-tp, --template <template>', '模板名称'],
    ];
  }

  action([name, opts]) {
    console.log(name, opts)
  }
}

function Init(instance) {
  return new InitCommand(instance);
}

module.exports = Init;
// 命令提示符

class Command {
  constructor(instance) {
    if(!instance) {
      throw new Error('command instance 不能为空！')
    }
    this.program = instance;

    const cmd = this.program.command(this.command);
    cmd.description('初始化项目')
    cmd.usage('<command> [options]')
    cmd.hook("preAction",() => {
      this.preAction();
    });
    cmd.hook("postAction",() => {
      this.postAction();
    });

    if(this.options?.length > 0) {
      this.options.forEach(option => {
        cmd.option(...option)
      });
    }
    
    cmd.action((...args) => {
      this.action(args);
    })
  }

  get command() {
    throw new Error('必须实现 command 方法！')
  }

  get description() {
    throw new Error('必须实现 description 方法！')
  }

  get options() {
    return [];
  }

  get action() {
    throw new Error('必须实现 action 方法！')
  }

  preAction() {}
  postAction() {}
}

module.exports = Command;

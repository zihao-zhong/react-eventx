const chalk = require('chalk');
const shell = require('shelljs');

async function startServer() {
  try {
    shell.exec('cd ../client/');
    shell.echo(chalk.green('开始打包'));
    shell.exec('npm run build');
    shell.echo(chalk.green('项目打包完成'));
    shell.exec('rm -rf ../server/static');
    shell.exec('mv ./build/* ../server/static/');
    shell.echo(chalk.green('打包后移动到 server 目录下 static'));
    
    shell.exec('pm2 restart react-eventX');
    shell.exit();
  } catch (error) {
    console.error(error);
    shell.exit(1);
  }
}

// 请在 server 根目录下执行 npm run start-server
startServer();
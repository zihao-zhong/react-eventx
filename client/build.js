import chalk from 'chalk';
import shell from 'shelljs';

async function startBuild() {
  try {
    // 强制停止运行的容器
    shell.exec('docker kill eventx_nginx');
    // 删除容器
    shell.exec('docker rm eventx_nginx');
    // 删除镜像
    shell.exec('docker rmi eventx_nginx');
    // 构建镜像
    shell.exec('docker build -t eventx_nginx .');
    // 运行容器
    shell.exec('docker run --name eventx_nginx -p 8080:80 -d eventx_nginx');

    shell.echo(chalk.green('容器打包成功，已启动'));
    shell.echo(chalk.green('http://localhost:8080'));

    shell.exit(0);
  } catch (error) {
    console.error(error);
    shell.exit(1);
  }
}

startBuild();

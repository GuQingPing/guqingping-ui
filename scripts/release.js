const { execSync } = require('child_process')           //执行命令
const args = require('minimist')(process.argv.slice(2)) //获取参数

const versionIncrements = ['patch', 'minor', 'major']   //版本枚举
const version = require('../package.json').version      //当前版本

const chalk = require('chalk')                          //带样式日志
const { prompt } = require('enquirer')                  //命令行可视化prompt

async function main() {
  try {
    let targetVersion = args._[0]
    execSync('yarn build', { stdio: 'inherit' })
    console.log(chalk.cyan("release.js --------------- yarn build 打包组件库"))
    execSync('yarn docs:build', { stdio: 'inherit' })
    console.log(chalk.cyan("release.js --------------- yarn docs:build 打包文档"))
    execSync('git add .', { stdio: 'inherit' })
    console.log(chalk.cyan("release.js --------------- git 添加暂存区"))
    execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' })
    execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
    console.log(chalk.cyan(`release.js --------------- git 本地提交版本 v${version}`))

    const { release } = await prompt({
      type: 'select',
      name: 'release',
      message: 'Select release type',
      choices: versionIncrements.map(i => `${i} (${inc(i)})`).concat(['custom'])
    })
    targetVersion = release.match(/\((.*)\)/)[1]

    const { yes } = await prompt({
      type: 'confirm',
      name: 'yes',
      message: `Releasing v${targetVersion}. Confirm?`
    })
    if (!yes) return

    execSync('npm publish', { cwd: pkgRoot, stdio: 'inherit' })
    console.log(chalk.cyan(`release.js --------------- npm发布版本 v${version}`))
  } catch (e) {
    throw e
  }
}
main()
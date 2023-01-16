const { execSync } = require('child_process')           //执行命令

const versionTypes = ['patch', 'minor', 'major', 'return']//版本枚举
const version = require('../package.json').version      //当前版本

const chalk = require('chalk')                          //带样式日志
const { prompt } = require('enquirer')                  //命令行可视化prompt

async function main() {
  try {
    console.log(chalk.cyan("release.js --------------- yarn build 打包组件库"))
    execSync('yarn build', { stdio: 'inherit' })
    console.log(chalk.cyan("release.js --------------- yarn docs:build 打包文档"))
    execSync('yarn docs:build', { stdio: 'inherit' })
    console.log(chalk.cyan("release.js --------------- git 添加暂存区"))
    execSync('git add .', { stdio: 'inherit' })
    console.log(chalk.cyan(`release.js --------------- git 本地提交版本 v${version}`))
    execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' })
    // execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
    console.log(chalk.cyan(`release.js --------------- git 远端提交版本 v${version}`))
    execSync(`git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks push -v origin master:master`, { stdio: 'inherit' })
    const { targetVersionType } = await prompt({
      type: 'select',
      name: 'targetVersionType',
      message: 'Select release type',
      choices: versionTypes
    })
    if (targetVersionType === "return") return

    execSync(`npm version ${targetVersionType}`, { stdio: 'inherit' })
    console.log(chalk.cyan(`release.js --------------- npm仓库发布版本 v${version} [registry.npmjs.org]`))
    execSync('npm publish', { stdio: 'inherit' })
  } catch (e) {
    console.log(chalk.red(e.message))
  }
}
main()
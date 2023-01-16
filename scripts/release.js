const { execSync } = require('child_process')           //执行命令
const args = require('minimist')(process.argv.slice(2)) //获取参数

const versionTypes = ['patch', 'minor', 'major']   //版本枚举
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
    // execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
    console.log(chalk.cyan(`release.js --------------- git 本地提交版本 v${version}`))

    // execSync(`git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks push -v origin master:master`, { stdio: 'inherit' })
    console.log(chalk.cyan(`release.js --------------- git 远端提交版本 v${version}`))

    const { yes } = await prompt({
      type: 'confirm',
      name: 'yes',
      message: `Update the library version?`
    })
    if (!yes) return
    const { targetVersionType } = await prompt({
      type: 'select',
      name: 'release',
      message: 'Select release type',
      choices: versionTypes
    })
    console.log(targetVersionType)

    execSync(`npm version ${targetVersionType}`, { stdio: 'inherit' })
    const { yes2 } = await prompt({
      type: 'confirm',
      name: 'yes',
      message: `Releasing v${targetVersion} to [registry.npmjs.org]. Confirm?`
    })
    if (!yes2) return
    execSync('npm publish', { stdio: 'inherit' })
    console.log(chalk.cyan(`release.js --------------- npm仓库发布版本 v${version} [registry.npmjs.org]`))
  } catch (e) {
    console.log(chalk.red(e.message))
  }
}
main()
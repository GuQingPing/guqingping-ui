const { execSync } = require('child_process')
const versionIncrements = ['patch', 'minor', 'major']
const args = require('minimist')(process.argv.slice(2))

async function main() {
  try {
    let targetVersion = args._[0]
    execSync('yarn build', { stdio: 'inherit' })
    console.log("yarn build 打包组件库")
    execSync('yarn docs:build', { stdio: 'inherit' })
    console.log("yarn docs:build 打包文档")
    execSync('git add .', { stdio: 'inherit' })
    console.log("git 添加暂存区")
    execSync(`git commit -m "upload to publish"`, { stdio: 'inherit' })
    console.log(`git 提交 "upload to publish"`)

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
  } catch (e) {
    throw e
  }
}
main()
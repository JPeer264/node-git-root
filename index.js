import { platform } from 'os';
import execa from 'execa';
import isGit from 'is-git-repository';

const cwd = process.cwd();

const isGitAdded = (altPath = cwd) => {
  if (!isGit(altPath)) {
    return '';
  }

  try {
    let cmd = '';

    if (platform() === 'win32') {
      cmd = `pushd ${altPath} & git rev-parse --show-toplevel `;
    } else {
      cmd = `(cd ${altPath} ; git rev-parse --show-toplevel )`;
    }

    const { stdout } = execa.shellSync(cmd);

    return stdout;
  } catch (e) {
    return '';
  }
};

export default isGitAdded;

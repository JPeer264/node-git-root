import path from 'path';
import execa from 'execa';

const cwd = process.cwd();

const isGitAdded = (altPath = cwd) => {
  try {
    const resolvedPath = path.resolve(altPath);
    const { stdout } = execa.sync('git', ['rev-parse', '--show-toplevel'], { cwd: resolvedPath });

    return stdout;
  } catch (e) {
    return '';
  }
};

export default isGitAdded;

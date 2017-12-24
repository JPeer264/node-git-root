import fs from 'fs';
import { homedir } from 'os';
import test from 'ava';
import path from 'path';

import gitRoot from './index';

const fixtures = path.join(process.cwd(), 'test', 'fixtures');

const folders = [
  'feat_test',
  'master',
];

test.before('rename git folders', () => {
  folders.map(folder => fs.renameSync(path.join(fixtures, folder, 'git'), path.join(fixtures, folder, '.git')));
});

test.after.always('rename .git folders', () => {
  folders.map(folder => fs.renameSync(path.join(fixtures, folder, '.git'), path.join(fixtures, folder, 'git')));
});

test('check if the given directory is the branch master', (t) => {
  t.is(path.normalize(gitRoot(path.join(fixtures, 'master'))), path.normalize(path.join(fixtures, 'master')));
});

test('check if the given directory is the branch feat/test', (t) => {
  t.is(path.normalize(gitRoot(path.join(fixtures, 'feat_test'))), path.normalize(path.join(fixtures, 'feat_test')));
  t.is(path.normalize(gitRoot(path.join(fixtures, 'feat_test', 'subdir'))), path.normalize(path.join(fixtures, 'feat_test')));
  t.is(path.normalize(gitRoot(path.join(fixtures, 'feat_test', 'subdir', 'subsubdir'))), path.normalize(path.join(fixtures, 'feat_test')));
});

test('check the branch name of the home dir', (t) => {
  t.is(gitRoot(homedir()), '');
});

#!/usr/bin/env node

const importLocal = require("import-local");
const log = require('npmlog');
const entry = require('../lib/index');

// 是否优先加载本地版本
if (importLocal(__filename)) {
  log.info('handy-core', '使用本地的 cli');
} else {
  entry(process.argv.slice(2));
}


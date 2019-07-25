const { equals } = require('./setoid');
const { isJust } = require('./isJust');
const { isNothing } = require('./isNothing');
const { just } = require('./just');
const { lte, lteWith } = require('./ord');
const { nothing } = require('./nothing');
const { of } = require('./of');

module.exports = {
  equals,
  isJust,
  isNothing,
  just,
  lte,
  lteWith,
  nothing,
  of
};

const _equals = (maybeValue, maybeAnother) => {
  return (
    (maybeValue.length <= 0 && maybeAnother.length <= 0) ||
    (maybeValue.length > 0 &&
      maybeAnother.length > 0 &&
      maybeValue[0] === maybeAnother[0])
  );
};

function equals(a, b) {
  if (a === undefined) return equals;
  if (b === undefined) return b => _equals(a, b);
  return _equals(a, b);
}

module.exports = {
  equals: equals
};

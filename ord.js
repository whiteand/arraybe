function _lte(innerLte, a, b) {
  return (
    a.length <= 0 || (a.length > 0 && b.length > 0 && innerLte(a[0], b[0]))
  );
}

const binaryLte = lte => (a, b) => {
  if (a === undefined) return binaryLte(lte);
  if (b === undefined) return b => _lte(lte, a, b);
  return _lte(lte, a, b);
};

function lteWith(innerLte, maybeA, maybeB) {
  if (innerLte === undefined) return lteWith;
  if (maybeA === undefined) return binaryLte(innerLte);
  if (maybeB === undefined) return b => _lte(innerLte, maybeA, b);
  return _lte(innerLte, maybeA, maybeB);
}

function lte(maybeA, maybeB) {
  return lteWith((a, b) => a <= b, maybeA, maybeB);
}

module.exports = {
  lteWith: lteWith,
  lte: lte
};

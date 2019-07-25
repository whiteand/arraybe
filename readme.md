# Arraybe

This is an implementation of the Maybe monad using array

## API

### `nothing :: Maybe`

It is a nothing value

Definition:

```javascript
const nothing = Object.freeze([]);
```

---

### `empty :: () => Maybe`

It is a function that returns `nothing`

Definition:


```javascript
const empty = () => []
```

---

### `just :: T => Maybe T`

It takes a value and wrap it with Maybe monad

Definition:

```javascript
const just = x => [x];
```

### `of :: T => Maybe T`

It's an equivalent of `just`

---

### `isJust :: Maybe T => boolean`

It takes a Maybe monad and returns `true` if it contains a value.

Definition:

```javascript
const isJust = maybeValue => maybeValue.length > 0;
```

---

### `isNothing :: Maybe T => boolean`

It takes a Maybe monad and returns `true` if it doesn't contain a value.

Definition:

```javascript
const isNothing = maybeValue => maybeValue.length === 0;
```

---

### `equals :: Maybe T => Maybe T => boolean`

It takes two maybe monads and returns true if they are equal.

Simple definition:

```javascript
const equals = (a, b) => {
  return (
    (isNothing(a) && isNothing(b)) || (isJust(a) && isJust(b) && a[0] === b[0]) // both contains same value
  );
};
```

This is a curried function:

```javascript
equals(a, b) === equals(a)(b);
```

---

### `lte :: Maybe T => Maybe T => boolean`

It takes two maybe values and returns `true` if first is less or equal then second

```javascript
lte(nothing, just(...)); // true
lte(just(1), just(2)); // true
lte(just(2), just(2)); // true
lte(just(3), just(2)); // false
lte(just(...), nothing)  // false
```

---

### `lteWith :: ((a,b) => boolean) => Maybe T => Maybe T`

It takes function that desides if inner value of first maybe less or equal then innerValue of second maybe value.

```javascript
const arrayLengthLte = (arr1, arr2) => arr1.length <= arr2.length

const maybeArrayLte = lteWith(arrayLengthLte)

maybeArrayLte(nothing, ...)    // true
maybeArrayLte(nothing, just([])) // true
maybeArrayLte(just([]), nothing) // false
maybeArrayLte(just([]), just([])) // true
maybeArrayLte(just([]), just([1])) // true
maybeArrayLte(just([2]), just([1])) // true
```

`lte` can be rewritten as:

```javascript
const lte = (maybeA, maybeB) => lteWith(
  (a,b) => a <= b,
  maybeA,
  maybeB
)
```

---

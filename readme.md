# Arraybe

This is an implementation of the Maybe monad using array

## API

### `of :: (value: T) => Maybe T`

It takes a value and returns it wrapped in Maybe monad.

Definition:

```javascript
const of = x => [x];
```

---

### `isJust :: (maybeValue: Maybe T) => boolean`

It takes a Maybe monad and returns `true` if it contains a value.

Definition:

```javascript
const isJust = maybeValue => maybeValue.length > 0;
```

---

### `isNothing :: (maybeValue: Maybe T) => boolean`

It takes a Maybe monad and returns `true` if it doesn't contain a value.

Definition:

```javascript
const isNothing = maybeValue => maybeValue.length === 0;
```

---

### `equals :: (a: Maybe T) => (b: Maybe V) => boolean`

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

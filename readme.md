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

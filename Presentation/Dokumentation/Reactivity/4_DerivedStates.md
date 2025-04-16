# Computed Properties / Derived State

## Vue

**Computed Properties:**
A dedicated feature of Vue that defines properties derived from reactive state.
They are cached by default until their dependencies change.

```js
import { computed } from "vue";
const doubleCount = computed(() => count.value * 2);
```

## React

**Using Memoization:**

No built-in “computed properties” exist in React. Instead, you often calculate derived data directly in the render function.

You can optimize `useMemo` hook to cache computed values between renders, only when one of the values in the dependency array changes.

```jsx
const doubleCount = useMemo(() => count * 2, [count]);
```

## Angular

1. **Getter Functions & Pipes:**

You can define getters in the component class that derive state on the fly. However, getters run on every change detection cycle, so they should be fast.

```ts
get doubleCount(): number {
  return this.count * 2;
}
```

2. **Pure Pipes:**

Angular pipes offer a way to transform data in the template and are only recalculated when their input changes (if declared as pure).

```html
<p>{{ count | double }}</p>
```

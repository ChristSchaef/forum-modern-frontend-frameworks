# Effects and Watchers

## Vue

Vue offers a `watch` or `watchEffect` to perform actions when data changes.

```js
import { watch } from "vue";

const count = ref(0);

watch(count, (newVal, oldVal) => {
  console.log("Count changed:", newVal);
});

watchEffect(() => {
  console.log("Count changed:", count.value);
});
```

## React

React offers `useEffect` to perform actions when data changes.
Similar to `useMemo`, a dependency array is required. The dependency array allows you to specify when the effect should run.

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

## Angular

- **Lifecycle Hooks and Observables:**
  - Angular provides a range of lifecycle hooks like `ngOnChanges`, `ngDoCheck`, `ngAfterViewInit`, etc., to allow execution of code at specific times in the component's lifecycle.
  - **ngOnChanges:**
    - Triggered when input-bound properties change.
    - Example:
      ```ts
      ngOnChanges(changes: SimpleChanges) {
        if (changes['count']) {
          console.log('Count changed:', changes['count'].currentValue);
        }
      }
      ```
  - Additionally, Angular commonly uses RxJS Observables for reacting to asynchronous changes.

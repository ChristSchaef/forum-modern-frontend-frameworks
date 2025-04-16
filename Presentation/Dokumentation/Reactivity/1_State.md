# Reactive Component State Declaration

## Vue

Introduces the Composition API where you use `reactive` for objects or `ref` for primitive values. Vue 3 leverages JavaScript proxies which are more efficient and flexible for tracking changes.

```js
import { ref } from "vue";
const countRef = ref(0);
```

## React

Uses the `useState` hook to create state variables. Every update to state triggers a re-render of the component.

```jsx
import { useState } from "react";

const [count, setCount] = useState(0);
```

## Angular

**Component Class Properties:**
Properties in the Angular component class become reactive when they are bound in the template. Angular’s template binding system automatically updates the view when these properties change.

```ts
@Component({
  selector: "app-counter",
})
export class CounterComponent {
  count: number = 0;
}
```

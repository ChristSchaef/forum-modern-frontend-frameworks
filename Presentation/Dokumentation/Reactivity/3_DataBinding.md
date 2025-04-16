# Data Binding

## Vue

**Interpolation & Directives:**
Offers directives like `v-bind` for dynamic attributes and `v-model` for two-way data binding.

```html
<template>
  <input v-model="name" :disabled="true" />
</template>
```

## React

**JSX:**
JSX expressions allow you to embed JavaScript directly within markup using curly braces.

> There isn’t built-in two-way binding. Instead, you manually wire up events and state updates manually.

```jsx
function Greeting({ name, setName }) {
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
```

## Angular

**Template Syntax:**

Provides property binding with square brackets (e.g., `[src]="imageUrl"`) and event binding with parentheses (e.g., `(click)="handleClick()"`).

Supports two-way binding via the `[()]` syntax (banana-in-a-box) using `ngModel`.

```html
<input [(ngModel)]="name" [disabled]="true" />
```

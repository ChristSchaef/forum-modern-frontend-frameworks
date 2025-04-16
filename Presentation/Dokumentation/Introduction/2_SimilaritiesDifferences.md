# Change Detection Mechanisms

### Vue

- **Vue 2:**
  - Uses a reactivity system based on getters and setters. It tracks dependencies during render so that only affected components update.
- **Vue 3:**
  - Leverages Proxies for more efficient dependency tracking and automatic batching of updates.
  - **Efficient Updates:** Computed properties are lazily evaluated and cached until their dependencies change.

### React

- **Virtual DOM & Reconciliation:**
  - React does not watch individual properties; instead, it triggers a complete re-render of the component tree upon state change.
  - **Virtual DOM Diffing:** React compares the current and previous virtual DOM to compute the minimal set of updates that are applied to the browser’s DOM.

### Angular

When an event occurs, Angular knows to run its change detection cycle.

#### **Strategies:**

- **Default:** Scans the entire component tree.
- **OnPush:** Allows developers to manually limit checks to when new references are passed into components, resulting in performance improvements.

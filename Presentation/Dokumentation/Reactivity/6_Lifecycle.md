# Lifecycle hooks (an over-simplified perspective)

## Vue

Here are some common lifecycle. For more info, checkout [the docs](https://vuejs.org/guide/essentials/lifecycle.html)

**`created`**

Initializes reactive data and events – used early for component setup.

**`mounted`**

Runs once the component’s DOM is rendered and accessible – ideal for DOM operations.

**`beforeUnmount`**

Invoked right before a component is removed from the DOM – useful for cleanup.

**`unmounted`**

Confirms the component has been removed from the DOM.

**`beforeMount`**

Executes just before the initial mounting – less frequently needed.

**`beforeCreate`**

Occurs prior to reactive data observation; rarely used in Vue 3 setups.

### Example usage(with mounted hook):

```tsx
onMounted(() => {
  // Your code to handle the "mounted" hook here.
});
```

## React

### Using `useEffect` with an empty dependency array

Using the hook this way runs your side-effect code **after** painting.
Cleanup is performed before the component unmounts.

```jsx
useEffect(() => {
  // Side effect code (e.g., data fetching)

  return () => {
    // Optional cleanup (e.g., unsubscribing)
  };
}, []); // Empty dependency array
```

### Using `useLayoutEffect` with an empty dependency array

Using `useLayoutEffect` this way runs your side-effect code **before** painting.

A common use-case: When you need to make DOM measurements(for example, bounding rectangle dimensions of an HTML element) or manipulate the DOM before the browser paints.

```jsx
useLayoutEffect(() => {
  // Layout effect code (e.g., measuring the DOM)

  return () => {
    // Optional cleanup
  };
}, []); // Empty dependency array
```

## Angular

Angular has a set of [lifecycle hooks](https://angular.dev/guide/components/lifecycle#ngaftercontentinit) you can use.

| Phase            | Method                  | Summary                                                                                                                                                                 |
| ---------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Creation         | `constructor`           | [Standard JavaScript class constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/constructor). Runs when Angular instantiates the component. |
| Change Detection | `ngOnInit`              | Runs once after Angular has initialized all the component's inputs.                                                                                                     |
|                  | `ngOnChanges`           | Runs every time the component's inputs have changed.                                                                                                                    |
|                  | `ngDoCheck`             | Runs every time this component is checked for changes.                                                                                                                  |
|                  | `ngAfterContentInit`    | Runs once after the component's _content_ has been initialized.                                                                                                         |
|                  | `ngAfterContentChecked` | Runs every time this component content has been checked for changes.                                                                                                    |
|                  | `ngAfterViewInit`       | Runs once after the component's _view_ has been initialized.                                                                                                            |
|                  | `ngAfterViewChecked`    | Runs every time the component's view has been checked for changes.                                                                                                      |
| Rendering        | `afterNextRender`       | Runs once the next time that **all** components have been rendered to the DOM.                                                                                          |
|                  | `afterRender`           | Runs every time **all** components have been rendered to the DOM.                                                                                                       |
| Destruction      | `ngOnDestroy`           | Runs once before the component is destroyed.                                                                                                                            |

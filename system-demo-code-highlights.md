# SystemJS POC Explanation/Highlights

## Summary

This document raises the salient points of using SystemJS, as exhibited in this POC.

## `/views/index.ejs`

```html
<script type="text/javascript" src="/javascripts/system-production.js"></script>
```

SystemJS must be present.

```html
<script type="text/javascript">
  SystemJS.config({ baseURL: '/javascripts' });
</script>
```

Basic config setting.

```html
<script type="text/javascript" src="/javascripts/app.js"></script>
```

Base app.

## `gulpfile.js`

Refer to comments therein.

## `/public/javascripts/(number).js`

Note how the exported module essentially gets wrapped in a function call to get registered.

## Examples

### Case One, `/src/base.js`: Loading Two Modules (Siblings)

```javascript
const One = SystemJS.import(`${number}.js`);
const Two = SystemJS.import(`${number + 1}.js`);

Promise.all([ One, Two ]).then((values) => {
  this.setState({
    sub: values.map((m) => {
      return <m.default key={`child-${values.indexOf(m) + 1}`} />
    })
  });
});
```

`System.import` is an asynchronous http request that returns a Promise. As you can see, `Promise.all` waits for resolution of those promises to execute a callback, wherein the values are returned in order within `[]values`.

Within the render method `{ this.state.sub.length > 0 ? this.state.sub : null }` catches any components deposited in the state value `sub`.

### Case Two, `/src/base.js`: Loading Another Two Modules (After the First Two)

```javascript
const Dos = SystemJS.import(`${number}.js`);
const Tres = SystemJS.import(`${number + 1}.js`);

Promise.all([ Dos, Tres ]).then((values) => {
  this.setState({
    sub: values.map((m) => {
      return <m.default key={`child-${values.indexOf(m) + 2}`} />
    })
  });
});
```

Clear the history before hitting the first button (Case One); you'll see requests made for components One and Two. Clear the history again before hitting the second button (Case Two); you'll see a request made only for component Three. Once a component is registered with SystemJS, it is unnecessary to make another HTTP request for it.

The scenario in which the page would need to pull in live-updated code would require additional effort, but also some sort of pub/sub connection for the app to realize it's necessary.

### Case Three, `/src/base.js`: Loading Two Modules (Parent/Child)

```javascript
const 三 = SystemJS.import(`${number}.js`);
const 四 = SystemJS.import(`${number + 1}.js`);

Promise.all([ 三, 四 ]).then((values) => {
  const Tre = values[0].default;
  const Quattro = values[1].default;
  this.setState({
    sub: [
      <Tre
        key="child-3"
        children={[ <Quattro key="child-4" children={[ '(in 3).' ]} /> ]}
      />
    ]
  });
});
```

This section demonstrates how to load one component as a child into another. It must be determined in the parent component how the child should be displayed. See `/src/components/3.js`.

# HANDS-ON REACT 

```sh
git checkout step3
```

## Step 3

- using **events**
- using component **state**
- using dynamic local **style**

### Step 3.A

#### Zoom Card
- Find plus and minus buttons in **Header** component
- Handle onClick events on the buttons and fire events up (for reference see sibling buttons)
- Handle fired events in the **App** component (for reference see **onChangeLayout** handler)
  - NOTE: don't forget `bind(this)` to the event handler
- Add constructor to **App** component; remember to call super();
  - Initialize state in the `constructor`, add `cardZoom` to state, set it to 1;
- In the event handler calculate zoom and update it in the state using `setState`
- Pass `state.cardZoom` to **Bookshelf** as `cardZoom`
- Inside **Bookshelf** in `render` function create style and add CSS property `zoom` initialized with `props.cardZoom` value like following
```javascript
const cardStyle = {
    zoom: this.props.cardZoom
};
```
- Apply created style to the tag that has `bookshelf-item` class

Now plus and minus buttons should zoom book cards.

### Step 3.B

#### Delete Card
- Add **delete** button to each bookcard holder after **BookCard** as following:
```html
<button class="delete">&#x2716;</button>
```
- Handle `onClick` and fire `onRemoveBook` event up with `bookId`.
- Handle fired event in the **App** component
  - NOTE: don't forget `bind(this)` to the event handler
- Add props to **`App.constructor`** parameters (pass to super too).
  - Initialize books state with `props.books`; replace usage of `props.books` by `state.books`.
- In `onRemoveBook` handler filter books to remove book with received `bookId`
- Use `setState` to apply filtered books list back to `state`



####[step 1](https://github.com/urrri/hands-on-react/tree/step1)
- making a react **simple component**
- making a react **component**
- **jsx** basics
- components **props**

####[step 2](https://github.com/urrri/hands-on-react/tree/step2)
- component **lists**
- props **validation**
- using dynamic **class**



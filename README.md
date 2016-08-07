# HANDS-ON REACT 

```sh
git checkout step2
```

## Step 2

- component **lists**
- props **validation**
- using dynamic **class**

### Step 2.A

#### Create list of books
- Find tag that has `bookshelf-item` class ( inside `src/js/components/Bookshelf.js` )
- Map `props.books` array to array of tags like in following example:
```javascript
const tagArray = dataArray.map((item, idx) => <tag key={idx}>{item.data}</tag >;
```
  - Use found tag as template
  - NOTE: make sure you add key attribute with unique value (e.g. index, bookId) to the root tag of each item
- Replace found tag with generated array of tags like following: `{tagArray}`
    
You should see list of book cards

### Step 2.B

#### Validate **BookCard** `props`
- Add `propTypes` to **BookCard** component (for reference see `propTypes` inside `src/js/components/Bookshelf.js`)

There are no visual effects :-(

### Step 2.C

#### Visualize Rating
- Find tag that renders rating in **BookCard** component. It should have the class `rating`
- Modify it so it will have additional class with name `rating-#`, where # is the numeric value of `props.rating` (e.g. `rating-4`)
  - for reference see `layout` inside `src/js/components/Bookshelf.js` 
  
You should see green stars for books that have rating  <span style="color:green">&#x2605;&#x2605;&#x2605;</span>


####[step 1](https://github.com/urrri/hands-on-react/tree/step1)
- making a react **simple component**
- making a react **component**
- **jsx** basics
- components **props**

####[step 3](https://github.com/urrri/hands-on-react/tree/step3)
- using **events**
- using component **state**
- using dynamic local **style**

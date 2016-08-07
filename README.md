# HANDS-ON REACT 

```sh
git checkout step1
```

## Step 1

- making a react **simple component**
- making a react **component**
- **jsx** basics
- components **props**

### Step 1.A

#### Create simple component, use **props**

- Find following comments inside `src/js/components/App.js`:

```html
{/* step 1.A - begin Footer.js */}
<footer class="footer">Total: 1</footer>
{/* end Footer.js */}
```

It defines the **Footer** component markup.

- Create simple (function-style) component using this markup. It means the markup should go inside `src/js/components/Footer.js`.
For reference see Header implementation

- Do not forget to add import for the new component in `src/js/components/App.js` as following:

```javascript
import Footer from "./Footer"
```

- Replace initial markup with the new component: `<Footer/>`
- Add attribute `count` to the `Footer` tag and pass there book count: `this.props.books.length` (for reference see sibling tags)
- Inside **Footer** component replace `Total: 1` with passed `count` (for reference see **Header** component, `title` property)
  
Finally you should see footer with 10 books.

### Step 1.B

#### Create **BookCard** component

- Find following lines inside `src/js/components/Bookshelf.js`:

```javascript
{book.title}
{/*
<div class="bookshelf-item">
    <BookCard {...book}/>
</div >
*/}
```

- Remove the first line. Uncomment other code by stripping `{/*` and `*/}`.
- Create new **BookCard** component using `class` syntax. (Create it in `src/js/components/BookCard.js`) 
- Render each of the given props (title, author, rating, cover) inside separate tag and apply class with the name of the prop. e.g. 

```html
<div className="title">{this.props.title}</div>
```

- Render `cover` as following:

```html
<div class="cover">
    <img src={this.props.cover}/>
</div>
```

- Apply class **`book`** to the root tag of the component.
- Add `import` statement for the new component inside `src/js/components/Bookshelf.js`

Finally you should see a single book card. 


####[step 2](https://github.com/urrri/hands-on-react/tree/step2)
- component **lists**
- props **validation**
- using dynamic **class**


####[step 3](https://github.com/urrri/hands-on-react/tree/step3)
- using **events**
- using component **state**
- using dynamic local **style**

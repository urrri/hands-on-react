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

Find following comments inside `src/js/components/App.js`:

```html
{/* begin Header.js */}
<header class="header">Bookshelf</header>
{/* end Header.js */}
```
It defines the **Header** component markup.

Create simple component using this markup. It means the markup should go inside `src/js/components/Header.js`:

```javascript
 export default () => <header class="header">Bookshelf</header>
```

Do not forget to import new component as following:

```javascript
import Header from "./Header"
```

Replace initial markup with the new component

### Step 1.B
 
Find following lines inside `src/js/components/Bookshelf.js`:

```javascript
{title}
{/*<BookCard bookId={bookId} title={title} author={author} rating={rating} cover={cover}/>*/}
```

- Remove the first line. Strip `{/*` and `*/}` from the second one.
- Create new **BookCard** component using `class` syntax.
- Render each of the props inside separate tag and apply class with the same name as the prop. e.g. 
```html
<div className="title">{this.props.title}</div>
```
- Set class **book** to the root tag of the component.
- Add local styles if you want.
- Import new component inside `src/js/components/Bookshelf.js`

Finally you should see a single book card. 

### Step 1.C (optional)

Modify **Header** component to make it configurable via props. 
Pass necessary props (e.g. title) from `src/js/components/App.js`. 

####[step 2](https://github.com/urrri/hands-on-react/tree/step2)
- props **validation**
- component **lists**

####[step 3](https://github.com/urrri/hands-on-react/tree/step3)
- using **events**
- using component **state**


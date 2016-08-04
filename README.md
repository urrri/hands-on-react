# HANDS-ON REACT 

```sh
git checkout step-1
```

## Step 1

- making a react **simple component**
- making a react **component**
- **jsx** basics
- components **props**

### Step 1.A

Find following comments inside App.js which define the Header component markup:

```html
{/* begin Header.js */}
<header class="header">Bookshelf</header>
{/* end Header.js */}
```

Create simple component using it. It means this markup should go inside `src/js/components/Header.js`:

```javascript
 export default () => <header class="header">Bookshelf</header>
```

Do not forget to import component from created file as:

```javascript
import Header from "./Header"
```

Replace initial markup with new component

### Step 1.B
 
Look at Bookshelf.js. 
In function render() you can see following lines:

```html
{title}
{/*<BookCard bookId={bookId} title={title} author={author} rating={rating} cover={cover}/>*/}
```

Remove the first one and `{/* */}` from the second

Create new BookCard component using class syntax. 
Render each passed props inside separate element and apply class named as the prop 
(e.g. `<div class="title">{this.props.title}</div`)
Set class 'book' to the root element.
Add local styles if you want.

Import new component in Bookshelf.js

Finally you should see single book card. 

### Step 1.C (optional)

Transform `Header` component so it would be able to received title via props. 
Change App.js to pass the title. 

####[step 2](https://github.com/urrri/hands-on-react/tree/step2)
- props **validation**
- component **lists**

####[step 3](https://github.com/urrri/hands-on-react/tree/step3)
- using **events**
- using component **state**


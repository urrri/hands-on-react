# HANDS-ON REACT 

```sh
git checkout step4
```

## Step 4

- using **Life-cycle events**

### Step 4.A

#### Searching books

- Find `filter` state inside **App** component - it reflects search string from **Header**
- Pass it to the **Bookshelf**

In the **Bookshelf** we need to filter books list, but doing it in the `render` is huge overhead.

For this purpose exists `componentWillReceiveProps` lyfe-cycle event. 

- Initialize state for **Bookshelf** with books (`constructor`, `props`; see `App.js`) 
- Override `componentWillReceiveProps` for **Bookshelf** and filter received books with received filter.
  Put results to state (You don't need to use setState)
  
Finally typing text in search field should filter books


####[step 1](https://github.com/urrri/hands-on-react/tree/step1)
- making a react **simple component**
- making a react **component**
- **jsx** basics
- components **props**

####[step 2](https://github.com/urrri/hands-on-react/tree/step2)
- component **lists**
- props **validation**
- using dynamic **class**

####[step 3](https://github.com/urrri/hands-on-react/tree/step3)
- using **events**
- using component **state**
- using dynamic local **style**




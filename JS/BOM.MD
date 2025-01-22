## BOM : Browser Object Model

## Location:

- In Location we have various functions:
- `location.reload` : it will reloads the site .
- if you write this `location.reload`
  it will reload for infinite times.

##### Location.href:

- it can change the location of our site to any and will open that site if
  `loaction.href = "any site link"`

- there is many more like port , hostname , origin,protocol etcs.

## history:

##### length: it will show total windows that you have open till now in the application.

##### back (): `history.back()` you will be redirected to the previous page/window/ prev application page

eg. let say you open `google` the search `youtube` click on a video on `what is Thread`.

now you will do `history.back()` page will be redirected to youtube home page . if you do again it will redirected to google home page.

`history.back() : ytVideo -> yt Home -> Google-> undefined `

##### forward(): `history.forward()`exact opposite for forward

` ytvideo->undefined  yt home forward to yt video`

##### go() : go take +ve numbers for forward operation and -ve number for backward ops just like back() & forward() whare you can only jump one step at a time.

`In go() we can jump total_back_num <=jump<=total_forward_number `

` go(-N) means go back() N times`
`go(N) means go forward() N times`

`if no N sites is there then return undefined`

## innerHeight:

## innerWidth:

## open() : return value window object specific to the tab that is open through open("url");

- `open('url',name,options)`

## close(): Scripts may close only the windows that are opened by them.

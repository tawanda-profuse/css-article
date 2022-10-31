# Styling

Hello, thank you for viewing this blog post. In this article, I'll be taking you through the process of defining the layout of a webpage using Cascading Style Sheets (CSS).

CSS is a programming language that is used to complement the Hypertext Markup Language (HTML). They work in unison and make webpages more aesthetically pleasing. In this article, I will demonstrate one way of doing it.

## Project Markup

To start off, I've created a folder and inside it, created a file and called it **index.html**. My preferred code editor is **VS Code**. VS Code has a lot of helpful extensions or add-ons that improve the development process. One extension that I find very useful is **Emmet** because it auto-completes code.

To configure Emmet, click on the gear icon ⚙ which opens your local settings. In the search bar of your settings, type **emmet**. A list of items will populate the page and you should select the first one that has the heading **Emmet: Exclude Languages**. Click on the 'Add item' button and in the input field that displays, type 'markdown' then click 'Ok'. Here is a [helpful article](https://code.visualstudio.com/docs/editor/emmet) about the right way to configure emmet.

**A screenshot of VS Code that shows the settings menu**:
![A screenshot of VS Code that shows the settings menu](https://github.com/tawanda-profuse/css-article/blob/master/pictures/settings.png?raw=true)

If properly configured, this should enable emmets features in our local development files. Back into our index.html file, type in the exclamation mark (**!**). This will bring up a context menu that suggests some code to auto-fill. If you hit the **tab** key, the text will be filled into the HTML file as shown below.

**A screenshot of an html file in VS Code with emmet auto-fill**:
![A screenshot of an html file in VS Code with emmet auto-fill](https://github.com/tawanda-profuse/css-article/blob/master/pictures/emmet.png?raw=true)

This automatically produces the following code in the file:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## Colors And Layout

In the root of the project folder, I'll create a file and name it **styles.css**. Then, in the index.html file, include it by adding the following code in-between the two **<head>** tags. Typing in `<link rel="stylesheet" href="styles.css">` will achieve that. Check out my other article about [HTML](https://andrew-tech-blog.herokuapp.com/article/exploring-the-hypertext-markup-language).

In this article, I will try to create a web page that is inspired by the formation of my favorite English Premier League team, Manchester United. Here is the [live link](https://tawanda-profuse.github.io/css-article/).

**An image of the Manchester United logo**:
![An image of the Manchester United logo](https://github.com/tawanda-profuse/css-article/blob/master/pictures/man-united-logo.png?raw=true)

**An image of the Manchester United formation**
![An image of the Manchester United formation](man-united-formation)

To begin with, we'll need to layout the soccer field. I'll use a green background as well as several division tags, which are positioned using the **absolute** value.

It's important to name the classes appropriately so that it's easier to reference them. The HTML inside the **body** tags looks like this:

```HTML
    <div class="playing-field">
        <div class="top-eighteen-area">
            <div class="top-sixteen-area"></div>
        </div>
        <div class="center-circle">
        </div>
        <div class="center-line"></div>
        <div class="bottom-eighteen-area">
            <div class="bottom-sixteen-area"></div>
        </div>
    </div>
```

To style the elements on the page, we'll re-use some CSS properties and change some figures to position the items differently as shown in the code segment below:

```CSS
.playing-field{
    border: 5px solid white;
    background-color: green;
    height: 90vh;
    width: 70%;
    position: relative;
    margin: auto;
}
.top-eighteen-area{
    padding: 50px 50px;
    border: 10px solid white;
    width: 300px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 30%;
}
.top-sixteen-area{
    padding: 25px 25px;
    border: 10px solid white;
    width: 150px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 24%;
}
.center-circle{
    position: absolute;
    left: 42%;
    top: 40%;
    border: 10px solid white;
    border-radius: 50%;
    padding: 20px 20px;
    width: 100px;
    height: 100px;
}
.center-line{
    top: 50%;
    background: white;
    width: 100%;
    position: absolute;
    height: 10px;
}
```

One other benefit of using **Emmet** in HTML is that it can auto-complete class names. For example, if I wanted to create a division tag with a class name of 'example', I could simply type the period symbol followed by the class name and Emmet will bring up a suggestion (**.example**).

**An screenshot in VS Code that shows Emmet auto completing a class name**:
![An screenshot in VS Code that shows Emmet auto completing a class name](https://github.com/tawanda-profuse/css-article/blob/master/pictures/example.png?raw=true)

To avoid the redundant use of code, we may need to create a class called **players** which holds all of the values that will apply to the elements that represent all 11 soccer players on the field as shown below.

```CSS
.players{
    background-color: red;
    border: 2px solid black;
    border-radius: 50%;
    font-size: 30px;
    color: white;
    text-align: center;
    z-index: 2;
    padding: 5px 5px;
    position: absolute;
}
```

This will simplify our task because all we need to do is specify the left, top, bottom, and right offset values. The goal keeper will be a division tag that has the class name **goal-keeper** and the **players** class we defined.

**The HTML For The Goal Keeper Position**:

```HTML
        <div class="bottom-eighteen-area">
            <div class="players goal-keeper">GK</div>
            <div class="bottom-sixteen-area"></div>
        </div>
```

**The CSS For The Goal Keeper Position**:

```CSS
.goal-keeper{
    left: 45%;
    bottom: 20%;
}
```

All the other positions on the soccer field will just require an alteration of the offset values depending on which direction you would want to place them.

## Adding A JavaScript Clock

The last thing I'd like to add to our soccer stadium is a clock that simulates the broadcast countdown in a live match. We will use JavaScript to do this, so we will need to create a JavaScript file and place it just above the closing **<body>** tag of our HTML file.

```HTML
    ...
    <script src="script.js"></script>
    </body>
</html>
```

The file name should be the same as the value in the **src** attribute of the script tag. Let's create the HTML layout of the clock by adding the following code right after the opening **<body>** tag.

```HTML
    <div class="count-info">
        <h1 id="time">--</h1>
        <h1 id="divide">:</h1>
        <h1 id="seconds">--</h1>
    </div>
```

In order to style it, will use the CSS flex-box property so that all the elements inside the count-info class appear horizontally. It's also essential to add a **z-index** property that is higher than any other on this page so that the element is rendered above the others.

```CSS
.count-info{
    display: flex;
    border: 5px solid navy;
    border-radius: 10px;
    background: white;
    position: absolute;
    box-shadow: 2px 2px 2px 2px black;
    width: 300px;
    z-index: 3;
}
```

The next thing to take care of is the clocks functionality. The key to doing that is referencing the **id** attribute of the HTML element because they are unique. Our JavaScript file will include some variables that access the HTML elements.

```JavaScript
    var minutesOutput = document.getElementById("minutes"); // Minutes output
    var secondsOutput = document.getElementById("seconds"); // Seconds output
```

The function named **timer** takes care of the conditional logic of the clock. For example, when the seconds reach 0, the minutes should decrease by 1 and vice-versa. Calling this function inside an Event Listener will execute the contents of the code block. An important aspect of making the clock run, is the **setInverval()** method; JavaScript's in-built timer. It executes the contents of it's body `{}` in milliseconds which are specified as a callback parameter. In this case it's 1000 which is equal to 1 second.

CSS is a fantastic tool because without it our web pages look dull. This web page makes use of CSS position absolute to place the elements as we want them. The source code is available on [GitHub](https://github.com/tawanda-profuse/css-article).

### Thank you for reading

---

If you enjoyed reading this article or would like to express your opinion, contact me via this [link](https://andrew-tech.netlify.app/index.html#contact).

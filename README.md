# Frontend Mentor - Interactive card details form solution

![Design preview for the Interactive card details form coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)


### Links

- Solution URL: [solution URL here](https://github.com/Yembot31013/interactive-card-details-form)
- Live Site URL: [live site URL here](https://interactive-card-details-form1.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS pseudos
- Flexbox
- Vanila Javascript


### What I learned

#### using regular expression to valid input pattern

```html
<input type="text" pattern="[\d\s]*" id="cardNumber" maxlength="19" placeholder="e.g. 1234 5678 9123 0000">
```

#### using more than one pseudo for a single selector

```css
.main .main-body .form-body .form-group .input-group .sub-input.validate-empty input:placeholder-shown:empty{
    border-color: var(--Red-input-errors);
}
```

#### using regular expression in javascript
```js
 const formattedValue = value.replace(/\s/g, '').substring(0, 19); // Remove existing spaces and limit to 19 characters
```

### Continued development

I intend in improving my css skills and learn a lot of regular expression and do a lot of validation without javascript


## Author

- Website - [Adekojo Adeyemi](https://codewithyembot.vercel.app)
- Frontend Mentor - [@Yembot31013](https://www.frontendmentor.io/profile/@Yembot31013)
- Linkedln - [@adekojo-adeyemi](https://www.linkedin.com/in/adekojo-a-487759226)



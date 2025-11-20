# Ex.08 Design of Interactive Image Gallery

## AIM
  To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS

## Step 1:

Clone the github repository and create Django admin interface

## Step 2:

Change settings.py file to allow request from all hosts.

## Step 3:

Use CSS for positioning and styling.

## Step 4:

Write JavaScript program for implementing interactivit

## Step 5:

Validate the HTML and CSS code

## Step 6:

Publish the website in the given URL.

## PROGRAM
```html
{% load static %}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LensFlow Gallery</title>
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
</head>

<body>

    <header class="header">
        <div class="brand">LensFlow</div>
        <input class="search" type="text" placeholder="Search photos...">
    </header>

    <section class="grid-gallery">
        <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2" alt="">
        <img src="https://images.unsplash.com/photo-1763246169636-4127600060b6" alt="">
        <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e" alt="Cupcake">
        <img src="https://images.unsplash.com/photo-1571091799989-e88304d6aed3" alt="">
        <img src="https://images.unsplash.com/photo-1454165205744-3b78555e5572" alt="">
        <img src="https://images.unsplash.com/photo-1519682337058-a94d519337bc" alt="">
        <img src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc" alt="">
    </section>


    <div class="lightbox" id="lightbox">
        <span class="exit" id="exit">&times;</span>
        <img id="lightImg" src="">
    </div>
     <script src="{% static 'js/script.js' %}"></script>
</body>

</html>
```
```css
* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #f3f3f3;
            font-family: "Lora", serif;
        }

        .header {
            width: 100%;
            padding: 20px 40px;
            background: #ffffff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 50;
        }

        .brand {
            font-size: 2rem;
            color: #4b6584;
            font-weight: 600;
        }

        .search {
            padding: 10px 20px;
            border-radius: 50px;
            border: 1px solid #bbb;
            outline: none;
            width: 250px;
            transition: 0.3s ease;
        }

        .search:focus {
            width: 300px;
        }

    
        .grid-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 20px;
            width: 90%;
            margin: 40px auto;
        }

        .grid-gallery img {
            width: 100%;
            height: 220px;              
            object-fit: cover;          
            border-radius: 12px;
            cursor: pointer;
            transition: 0.3s ease;
            box-shadow: 0 6px 14px rgba(0,0,0,0.15);
        }

        .grid-gallery img:hover {
            transform: scale(1.03);
        }

        .lightbox {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.85);
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .lightbox img {
            max-width: 85%;
            max-height: 85%;
            border-radius: 10px;
        }

        .exit {
            position: absolute;
            top: 25px;
            right: 35px;
            font-size: 2.5rem;
            cursor: pointer;
            color: white;
        }
```
```js
document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".grid-gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightImg = document.getElementById("lightImg");
    const exit = document.getElementById("exit");

    photos.forEach(img => {
        img.addEventListener("click", () => {
            lightImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    exit.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
```


## OUTPUT
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/c6db1642-4a47-4376-bb08-e8244bfc3e82" />


## RESULT
  The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.

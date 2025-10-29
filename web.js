const express = require('express');
const web = express();
const PORT = 3002;

web.use(express.static('public'));

web.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE>
    <html>
      <head>
        <title>web Page</title>
        <style>
         body{
           background-color: #aaa7cc; 
         }
          li{
           display:flex;
           flex-direction:row;
            list-style-type: none;
            gap: 10px;
            font-size:12px;
          }
        .center-text{
                text-align:center;
                margin-top:50px
        }
        
        .btn{
         color:white;
         background-color:	#5c5174;
         border: #5c5174;
        }
        .button{
              display: flex;
               flex-direction:column;
             justify-content: center;
            align-items: center;
        }
        </style>
      </head>
      <body>
        <div class="heading">
          <li>
            <ul>Evernote</ul>
           <a href="/"> <ul>Home</ul></a>
            <a href="/about"><ul>About Us</ul></a>
            <a href="/services"> <ul>Services</ul></a>
            <a href="/contact"> <ul>Contact Us</ul><a>
          </li>
        </div><hr>
        <div class ="center-text">
         <h5>TAME YOUR WORK,
           ORGANIZE YOUR LIFE
         </h5>
         <p>Remember everything and tackle any project </p>
        </div>
        <div class ="button">
        <input type="submit" value="Start for free" class="btn">
         <p>Already have an account? <a href="/login">Log in now</p></a>
        </div>
      </body>
    </html>
    
  `);
});


// About Us page route
web.get('/about', (req, res) => {
  res.send(`
    <!DOCTYPE>
    <html>
      <head>
    <style>
         body{
           background-color: #aaa7cc; 
         }
          li{
           display:flex;
           flex-direction:row;
            list-style-type: none;
            gap: 10px;
            font-size:12px;
          }
          h4{
          text-align:center;
          }
          p{
          text-align:center;
          }
    </style>
    </head>
      <body>
        <div class="heading">
          <li>
            <ul>Evernote</ul>
            <a href="/"> <ul>Home</ul> </a>
             <a href="/about"><ul>About Us</ul></a>
             <a href="/services"><ul>Services</ul></a>
             <a href="/contact"> <ul>Contact Us</ul><a>
          </li>
        </div><hr>
        <h4>ABOUT US</h4>
        <p>
     <em> At <strong>TaskTamer</strong>, we believe productivity should bring peace — not pressure. <br><em>
      <em>Our mission is to help you tame your work and organize your life<br><em>
      <em> with tools that make planning effortless and focus natural.<em><br><br><br>

      <em>From managing daily to-dos to coordinating big projects, TaskTamer helps you remember everything, <br>
      stay organized, and tackle any goal with confidence.We combine smart design with intuitive features<br>
      so you can take control of your schedule, reduce stress, and make real progress — at work and in life.<em>
    </p>
        </body>
   </html>
  `);
});

web.get('/login',(req, res) => {
  res.send(`

    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>

  <style>
    body {
      background-color: #aaa7cc;
      justify-content: center;
      align-items: center;
    }

    li{
           display:flex;
           flex-direction:row;
            list-style-type: none;
            gap: 10px;
            font-size:12px;
          }

    form {
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      width: 200px;
      text-align: center;
      background-color: #66669a;
     margin: 0px auto;
      
    }

    h2 {
      margin-bottom: 30px;
    }

    input {
      width: 100%;
      border: none;
      border-bottom: 2px solid #ccc;
      padding: 10px;
      margin-bottom: 25px;
      font-size: 16px;
      outline: none;
    }

    button {
      width: 100%;
      background-color: #5c5174;
      border: none;
      padding: 12px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 16px;
    }

  
  </style>
</head>
<body>
 <div class="heading">
          <li>
            <ul>Evernote</ul>
            <a href="/"> <ul>Home</ul> </a>
             <a href="/about"><ul>About Us</ul></a>
             <a href="/services"><ul>Services</ul></a>
             <a href="/contact"> <ul>Contact Us</ul><a>
          </li>
        </div><hr>
  <div>
  <form>
    <h2>Login</h2>

    <input type="email" placeholder="Email" required>
    <input type="password" placeholder="Password" required>

    <button type="submit">Login</button>
  </form>
  <div>
</body>
</html>
`);
});


web.get('/services',(req, res) => {
  res.send(`

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>

  <style>
   body{
           background-color: #aaa7cc; 
         }

    li{
           display:flex;
           flex-direction:row;
            list-style-type: none;
            gap: 10px;
            font-size:12px;
          }
      .service{
       text-align:center;
      }

 </style>
</head>
<body>
 <div class="heading">
          <li>
            <ul>Evernote</ul>
            <a href="/"> <ul>Home</ul> </a>
             <a href="/about"><ul>About Us</ul></a>
            <a href="/services"> <ul>Services</ul><a>
            <a href="/contact"> <ul>Contact Us</ul><a>
          </li>
        </div><hr>

  <div class = "service">
      <h4>Strategy</h4>
     <em> <p> Our strategy services focus on understanding your goals,<br>
      analyzing your challenges, and creating actionable <br>
      plans that drive growth.</p><em><br>

      <h4>Branding</h4>
      <em> <p>We craft authentic brand identities that reflect your values<br>
       and connect with your audience.From visual design to voice and messaging<br>
      we help your brand stand out with clarity, confidence, and consistency.</p><em><br>

      <h4>E-Commerce</h4>
      <em> <p>We design seamless e-commerce experiences that turn visitors <br>
      into loyal customers.From user-friendly store layouts to secure payment integrations,<br>
       we ensure every part of your online store runs smoothly.</p><em>


  </div>
</body>
</html>
`);
});

web.get('/contact',(req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us</title>

  <style>
    body {
     background-color: #aaa7cc;  
    }
    li{
           display:flex;
           flex-direction:row;
            list-style-type: none;
            gap: 10px;
            font-size:12px;
          }

    .contact-form {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 260px;
      height: 73vh;
      margin:0px auto;
       background-color: #66669a;
    }

    h2 {
      text-align: center;
      margin-bottom: 25px;
    }

    input, textarea {
        width: 80%;
        border: none;
        border-bottom: 2px solid #ccc;
        padding: 10px;
        margin-bottom: 20px;
        font-size: 13px;
        outline: none;
        resize:none;
    }


    button {
      width: 100%;
      background-color: #5c5174;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 16px;
    }

  </style>
</head>

<body>
<div class="heading">
          <li>
            <ul>Evernote</ul>
            <a href="/"> <ul>Home</ul> </a>
             <a href="/about"><ul>About Us</ul></a>
            <a href="/services"> <ul>Services</ul><a>
          </li>
        </div><hr>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form>
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</body>
</html>

`);
});


web.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

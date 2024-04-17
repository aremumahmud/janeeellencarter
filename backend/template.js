module.exports = (body) => {
    // console.log(body)
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nova+Mono&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,900&family=Open+Sans:wght@800&family=Roboto&family=Russo+One&family=Tilt+Warp&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
        body {
            font-family: "Work Sans", sans-serif;
        }
        
        .content p {
            font-weight: bold;
        }
        
        .content span {
            font-weight: normal;
        }
    </style>

</head>

<body>
<img src="https://res.cloudinary.com/dvauarkh6/image/upload/v1713360131/DEV/logo_xwk6uj.png" alt="">
    
    <p>Jane Ellen Carter, You've got a new message!</p>
    <br>
    <p><u>Here are his/her('s') personal details:</u></p>

    <div class="content">
        <p>Full Name: <span>${body.full_name}</span></p>
        <p>Email address: <span>${body.email}</span></p>
        <p>Phone number: <span>${body.phone}</span></p>
        <p>Home address / Location: <span>${body.location}</span></p>
    </div>

    <br>
    <p><u>Message sent by him/her:</u></p>

    <p>${body.message}</p>

    <br><br><br>
    <footer>
        Sent by janeellencarter.com &copy; 2024
    </footer>
</body>

</html>
    `;
};
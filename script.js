let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//firebase:-

const form = document.getElementById('contactForm');
const alert = document.querySelector('.alert');


const firebaseConfig = {
    apiKey: "AIzaSyAK5X_43EO2OB78QM1E0czcOI16jD49FZk",
    authDomain: "portfolio-4bbb9.firebaseapp.com",
    databaseURL: "https://portfolio-4bbb9-default-rtdb.firebaseio.com",
    projectId: "portfolio-4bbb9",
    storageBucket: "portfolio-4bbb9.appspot.com",
    messagingSenderId: "850395791962",
    appId: "1:850395791962:web:2e7c96a2abb49967924e63",
    measurementId: "G-WHYNBK9000"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const ref = database.ref('messages');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("form submitted");

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // console.log(name, email, number, subject, message);

    ref.push({
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message
   })
   .then(() => {
       alert.style.display = "block";
   })
   .catch((error) => {
       console.log(error);
   });
   
    // alert.style.display = "block";

    setTimeout(() => {
        alert.style.display = "none";
    }, 2000)

    form.reset();
})
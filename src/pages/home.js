import Navbar from "../components/NavBar.js";
import LoginForm from "../components/LoginForm.js";



export default function renderHomePage(){
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    


}
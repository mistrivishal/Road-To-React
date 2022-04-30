import {navbar,popular,appenpop} from "../components/navbar.js"

import "../styles/style.css";

let navbar1 = document.getElementById('navbar');
navbar1.innerHTML = navbar()


let container = document.getElementById('container');

popular().then((data)=> {
    console.log(data);
    container.innerHTML = null;
    appenpop(data.results,container)
 });
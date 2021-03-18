import './styles.css';
import home from "../home"
import items from "../items"

import homeImage from './home-image.jpg';

const parent=document.getElementById("parent")
parent.append(home(), items());

const hbImage = document.createElement("img");
hbImage.src = homeImage;
import './styles.css';
import home from "../home"

import homeImage from './home-image.jpg';

const parent=document.getElementById("parent")
parent.append(home());

const hbImage = document.createElement("img");
hbImage.src = homeImage;
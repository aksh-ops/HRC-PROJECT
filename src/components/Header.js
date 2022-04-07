import img from './image/logo.svg.svg'
import image from './image/Group 20399.svg'

import './Header.css'

function Header(){
    return(
        <div className="logo" >
            <img className="logo-item" src={img}></img>
            <img className="abc" src={image}></img>
        </div>  
         );
}
export default Header
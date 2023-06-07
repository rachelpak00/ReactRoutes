import {Link} from 'react-router-dom'; 

export default function NavBar () {
    return (
        <div id="navbar">
        <Link to='/home'>HOME</Link>
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
        <Link to='/green'>Green</Link>
      </div> 
    )
}
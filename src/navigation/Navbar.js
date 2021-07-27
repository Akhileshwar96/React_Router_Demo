import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>React Router DOM Demo</h1>
        <div className="links">
          <Link to="/" style={{ 
            color: 'white', 
            backgroundColor: 'gray',
            borderRadius: '8px' ,
            marginLeft: 20,
            padding: 5
          }}>Home</Link>
          <Link to="/about" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' ,
            marginLeft: 20,
            padding: 5
          }}>About</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;
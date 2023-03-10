import { NavLink } from 'react-router-dom';  
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Barra() {
    return (
        <>
            <Navbar bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={"https://www.pngall.com/wp-content/uploads/5/Pokemon-Go-Logo.png"} style={{ width: '5%', height: '5%' }} alt="logo" />
                    </Navbar.Brand>
                </Container>
                <Nav>
                    <NavLink
                        className={({ isActive }) => (isActive ? "viewActiva" : "view")}
                        to="/" >
                        Home
                    </NavLink>
                 
                    <NavLink
                        className={({ isActive }) => (isActive ? "viewActiva" : "view")}
                        to="/personajes" >
                        Pokemones
                    </NavLink>

                </Nav>
            </Navbar>
        </>
    );
}

export default Barra;
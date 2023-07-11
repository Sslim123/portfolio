import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    // <div   style={{width: '100%', backgroundColor: 'green',
    // position: 'fixed', top: '0'}}>

    <Navbar collapseOnSelect expand="lg" bg='red'    className='nav-bar'>
     
      <Container>
        <Navbar.Brand href="#home"><h3>Salem</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          
          </Nav>
          <Nav className='nav'>
          <li>
            <a href="/">Home</a>
            </li>
           <li>
             <a href="#projects">Projects</a>
            </li>
            <li>

            <a href="#form-contact">Contact</a>
            </li>
            <li>
              <a href="#about">  About      </a>
              </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>
  );
}

export default CollapsibleExample;
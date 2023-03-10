import { Container, Nav, Navbar } from 'react-bootstrap';

export default function SideMenu() {
    return(
        //navigation bar, side menu
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="home">
                    // on click, sends user back to home
                    <h1 href="/" className="web-header">XPLR WRLD</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                        href="create">Create</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

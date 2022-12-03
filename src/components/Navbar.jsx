import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../store/reducers/counterSlice';

export default function NavBar() {

    const dispatch = useDispatch();
    const { cart, items } = useSelector((state) => state.cartReducer);
    // console.log(items);
    
	const { remove, reset } = cartActions;
    const removeFromCart = (item) => dispatch(remove(item));
    const resetCart = () => dispatch(reset());

	// const [background, setBackground] = React.useState("transparent");
	// let location = useLocation();

	// const navScroll = () => {
	// 	if (window.scrollY > 0) {
	// 		setBackground("primary");
	// 	} else {
	// 		setBackground("transparent");
	// 	}
	// };
	// React.useEffect(() => {
	// 	if (location.pathname !== "/home" && location.pathname !== "/") {
	// 		setBackground("primary");
	// 	}
	// 	window.addEventListener("scroll", navScroll);
	// });

    return(
        <Navbar className='sticky-top fw-bold shadow-lg' expand="lg"
        style={{backgroundImage: 'linear-gradient(to right, rgba(21, 52, 98, 1), rgba(4, 102, 61, 0.9))'}} 
        >
        <Container>
            <Navbar.Brand className='text-warning'>MyBookstore</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavLink to="/" className='nav-link text-white ms-5'>Home</NavLink>
                <NavLink to="/books" className='nav-link text-white ms-4'>Our Books</NavLink>
                <NavLink to="/about" className='nav-link text-white ms-4'>About Us</NavLink>
                <NavLink to="/contact" className='nav-link text-white ms-4'>Contact Us</NavLink>
            <Nav className="ms-auto">
            <NavDropdown title="Cart" id="basic-nav-dropdown" menuVariant="dark"  align="end">
                {items.map(item => <NavDropdown.Item key={item.id} item={item}>
                    {item.title} ${item.price} 
                    <button className='btn btn-dark border border-2 border-danger rounded-circle text-white ms-3 py-1' 
                        onClick={()=>{removeFromCart(item)}}>X
                    </button>
                </NavDropdown.Item>)}
                <NavDropdown.Divider />
                <NavDropdown.Item>Total Books in Cart: {cart}
                    <br/><Button variant="outline-warning" className='mt-2' onClick={resetCart}>Reset Cart</Button>
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
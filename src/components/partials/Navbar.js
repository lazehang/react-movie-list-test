import React from 'react';
import { 
    Navbar, 
    NavbarBrand, 
} from 'reactstrap';

const navStyle = {
    'backgroundImage': 'url(/images/nav_bar.png)',
    'backgroundSize': 'contain'
}

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar className="pb-0" inverse fixed="top" expand="md" style={navStyle}>
                <NavbarBrand href="/"><img src="/images/Back.png" alt="back img" className="img img-responsive" height="20px"/> Romantic Comedy</NavbarBrand>
                <img src="/images/search.png" height="20px" alt="search icon" />
            </Navbar>
        )
    }
}
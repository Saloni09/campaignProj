import React from 'react';
import {
	Nav,
	NavItem,
	Navbar,
	NavbarBrand,
	Collapse,
	DropdownItem,
	Button,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu
} from 'reactstrap';

import profilephoto from '../../assets/images/users/1.jpg';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../assets/images/logo-icon.png';
import logolighticon from '../../assets/images/logo-light-icon.png';
import logodarktext from '../../assets/images/logo-text.png';
import logolighttext from '../../assets/images/logo-light-text.png';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.showMobilemenu = this.showMobilemenu.bind(this);
		this.state = {
			isOpen: false
		};
	}
	/*--------------------------------------------------------------------------------*/
	/*To open NAVBAR in MOBILE VIEW                                                   */
	/*--------------------------------------------------------------------------------*/
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	/*--------------------------------------------------------------------------------*/
	/*To open SIDEBAR-MENU in MOBILE VIEW                                             */
	/*--------------------------------------------------------------------------------*/
	showMobilemenu() {
		document.getElementById('main-wrapper').classList.toggle('show-sidebar');
	}

	render() {
		return (
			<header className="topbar navbarbg" data-navbarbg="skin1">
				<Navbar className="top-navbar" dark expand="md">
					<div className="navbar-header" id="logobg" data-logobg="skin6">
						{/*--------------------------------------------------------------------------------*/}
						{/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
						{/*--------------------------------------------------------------------------------*/}
						<NavbarBrand href="/">
							<b className="logo-icon">
								<img src={logodarkicon} alt="homepage" className="dark-logo" />
								<img
									src={logolighticon}
									alt="homepage"
									className="light-logo"
								/>
							</b>
							<span className="logo-text">
								<img src={logodarktext} alt="homepage" className="dark-logo" />
								<img
									src={logolighttext}
									className="light-logo"
									alt="homepage"
								/>
							</span>
						</NavbarBrand>
						{/*--------------------------------------------------------------------------------*/}
						{/* Mobile View Toggler  [visible only after 768px screen]                         */}
						{/*--------------------------------------------------------------------------------*/}
						<a className="nav-toggler d-block d-md-none" onClick={this.showMobilemenu}>
							<i className="ti-menu ti-close" />
						</a>
					</div>
					<Collapse className="navbarbg" isOpen={this.state.isOpen} navbar data-navbarbg="skin1" >
						<Nav className="ml-auto float-right" navbar>
							<NavItem>
								<a href="" className="btn mr-2" style={{ marginTop: '15px',color:'white' }}>BETA</a>
							</NavItem>
							{/*--------------------------------------------------------------------------------*/}
							{/* Start Profile Dropdown                                                         */}
							{/*--------------------------------------------------------------------------------*/}
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret className="pro-pic">
									Language Select >
								</DropdownToggle>
								<DropdownMenu right className="user-dd">
									<DropdownItem>
										<i className="ti-user mr-1 ml-1" /> English
                  </DropdownItem>
									<DropdownItem>
										<i className="ti-user mr-1 ml-1" /> Hindi
                  </DropdownItem>
									
									<DropdownItem divider />
									<Button
										color="success"
										className="btn-rounded ml-3 mb-2 mt-2"
									>
										View Profile
                  </Button>
								</DropdownMenu>
							</UncontrolledDropdown>
							{/*--------------------------------------------------------------------------------*/}
							{/* End Profile Dropdown                                                           */}
							{/*--------------------------------------------------------------------------------*/}
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}
export default Header;

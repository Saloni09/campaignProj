import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header/header.jsx';
//import Sidebar from '../components/sidebar/sidebar.jsx';
import Footer from '../components/footer/footer.jsx';
import ThemeRoutes from '../routes/routing.jsx';

class Fulllayout extends React.Component {
	/*--------------------------------------------------------------------------------*/
	/*Change the layout settings [HEADER,SIDEBAR && DARK LAYOUT] from here            */
	/*--------------------------------------------------------------------------------*/
	constructor(props) {
		super(props);
		//this.updateDimensions = this.updateDimensions.bind(this);
		this.state = {
			isOpen: false,
			width: window.innerWidth
		};

		
	}
	/*--------------------------------------------------------------------------------*/
	/*Life Cycle Hook, Applies when loading or resizing App                           */
	/*--------------------------------------------------------------------------------*/
	componentDidMount() {
		window.addEventListener("load", this.updateDimensions);
		window.addEventListener("resize", this.updateDimensions);
	}
	/*--------------------------------------------------------------------------------*/
	/*Function that handles sidebar, changes when resizing App                        */
	/*--------------------------------------------------------------------------------*/

	/*--------------------------------------------------------------------------------*/
	/*Life Cycle Hook                                                                 */
	/*--------------------------------------------------------------------------------*/
	componentWillUnmount() {
		window.removeEventListener("load", this.updateDimensions);
		window.removeEventListener("resize", this.updateDimensions);
	}


	render() {
		/*--------------------------------------------------------------------------------*/
		/* Theme Setting && Layout Options wiil be Change From Here                       */
		/*--------------------------------------------------------------------------------*/
		return (
			<div
				id="main-wrapper"
				data-theme="light"
				data-layout="vertical"	
				data-header-position="fixed"
				data-boxed-layout="full"
			>
				{/*--------------------------------------------------------------------------------*/}
				{/* Header                                                                         */}
				{/*--------------------------------------------------------------------------------*/}
				<Header data={this.state} />
				{/*--------------------------------------------------------------------------------*/}
			
				{/* Page Main-Content                                                              */}
				{/*--------------------------------------------------------------------------------*/}
				<div className="page-wrapper d-block">
					<div className="page-content container-fluid">
						<Switch>
							{ThemeRoutes.map((prop, key) => {
								if (prop.redirect) {
									return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
								}
								else {
									return (
										<Route path={prop.path} component={prop.component} key={key} />
									);
								}
							})}
						</Switch>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}
export default Fulllayout;

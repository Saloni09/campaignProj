import React from "react";
import DatePicker from "react-datepicker";
import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import listimg from 'assets/images/list.png';
import graphimg from 'assets/images/graph.png';

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Input,
	Table,
	Tooltip,
	Button
} from 'reactstrap';

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
		data:[
		{id:101,date: '2017/12/12',cmp:'Test Whatsapp'},
		{id:102,date: '2016/08/09',cmp:'Superr Jewel Quest'},
		{id:103,date: '2017/05/11',cmp:'Mole Slayer'},
		{id:104,date: '2017/06/12',cmp:'Mancala Mix'}
		],
			startDate:new Date(),
			
		};
	}

	handleChange= date=>{
		this.setState({startDate:date})
	}
	
    computeDiff(dt){
	    let d1= new Date(dt);
	    let d2 = new Date();
		let timeDiff = d2.getTime() - d1.getTime();
		let DaysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
		let x="";
		if(DaysDiff>1){
		 x= DaysDiff+" days ago";
		}
	    else{
	     x= DaysDiff+" moments ago";
	    }
	    return x;
    }
	render() {
	let that=this;
	let the_component=this.state.data.map(function(cmpgn){
						return(
							<tr>
								<td>
									<div className="d-flex no-block align-items-center">
										<div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
										<div className="">
											<h5 className="mb-0 font-16 font-medium">{cmpgn.date}</h5><span>
											{that.computeDiff(cmpgn.date)}</span></div>
									</div>
								</td>
								<td>{cmpgn.cmp}</td>

								<td>
									<i className="fa text-orange" id="tlp1">$</i>
									<span>View Pricing</span>
								</td>
								<td><img src={listimg} height="20" width="20"/></td>
								<td><img src={graphimg} height="20" width="20"/></td>
								<td className="blue-grey-text  text-darken-4 font-medium"><label for="date-picker-1">Schedule Again</label>
					               <input type="date" onChange={that.handleChange} /></td>
							</tr>)});
		return (
			/*--------------------------------------------------------------------------------*/
			/* Used In Dashboard-4 [General]                                                  */
			/*--------------------------------------------------------------------------------*/

			<Card>
				<CardBody>
					<div className="d-flex align-items-center">
						<div>
							<CardTitle style={{align:"center"}}>Manage Campaigns</CardTitle>
							<CardSubtitle>Overview of Latest Month</CardSubtitle>
							<span><Button
										color="success"
										className="btn-rounded ml-3 mb-2 mt-2"
									>
										Upcoming Campaigns
                  </Button></span>
                  <span><Button
										color="success"
										className="btn-rounded ml-3 mb-2 mt-2"
									>
										Live Campaigns
                  </Button></span>
                  <span><Button
										color="success"
										className="btn-rounded ml-3 mb-2 mt-2"
									>
										Past Campaigns
                  </Button></span>
						</div>
						
					</div>
					<Table className="no-wrap v-middle" responsive>
						<thead>
							<tr className="border-0">
								<th className="border-0">Date</th>
								<th className="border-0">Campaign</th>

								<th className="border-0">View</th>
								<th className="border-0">Actions</th>
								
							</tr>
						</thead>
						<tbody>
						{the_component}
							
						</tbody>
					</Table>
				</CardBody>
			</Card>
		);
	}
}

export default Projects;

import React, {Component, Fragment} from 'react';
class EmployeeComponent extends Component{
	state={
		emp_id:'TYP',
		emp_name:'Sana',
		emp_salary:40000,
		emp_education:"B.Tech",
		emp_designation:'Web Developer',
		emp_city:'Mandya',
		emp_photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMa1AbYcWtnWsVZRg-nHvc1dFLpzyJxxh_Q&usqp=CAU'
	}
	  render(){
		return (
			<Fragment>
			<section>
			<article>
			<img src={this.state.emp_photo}
			     alt={this.state.emp_name} />
			 <h1>{this.state.emp_name}</h1>
			 <p>{this.state.emp_id}</p>
			 <p>{this.state.emp_salary}</p>
			 <p>{this.state.emp_education}</p>
			 <p>{this.state.emp_city}</p>
			 <p>{this.state.emp_designation}</p>
			 </article>
			 </section>
			 </Fragment>
			 
		 );

	}
}

export default EmployeeComponent; 
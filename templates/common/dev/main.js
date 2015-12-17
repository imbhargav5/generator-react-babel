import React from 'react';
import ReactDOM from 'react-dom';
/*
 * Root Dev Component
*/
class Main extends React.Component{
	render(){
		return <div>Main</div>;
	}
}

export default Main;

ReactDOM.render(<Main/>,document.getElementById('app'));
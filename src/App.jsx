import React,{Component} from 'react';
import CardsHolder from './CardsHolder';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component{


constructor(){
super();
this.state={
	robots:[],
	searchfield:''
}
}


onSearchChange=(event)=>{
this.setState({searchfield:event.target.value})
}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then(users=>this.setState({robots:users}));
}


render(){	
const modifiedRobots=this.state.robots.filter((item)=>{
if(item.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
	return item;
})	
if (this.state.robots.length===0)
{
		return <h1>Loading</h1>
}
else{

return(
<div className="tc">
<h1 className='f1'>RoboFriends</h1>
<SearchBox onSearchChange={this.onSearchChange} />
<Scroll>
<CardsHolder robots={modifiedRobots} />
</Scroll>
</div>
);
}
}
}
export default App;
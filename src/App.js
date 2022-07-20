import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// Components
import Home from './components/Home';
// import News from './components/News'
// import Donate from './components/Donate'
// import Gallery from './components/Gallery'

class App extends Component {
  render () {
	// const HomeComponent = () => (<Home/>);
	// const NewsComponent = () => (<News/>)
	return (
		<BrowserRouter>
		 <Routes>
			<Route exact path="/" element={<Home/>}/>
		 </Routes>
		</BrowserRouter>
	);
  }
}

export default App;

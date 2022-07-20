import logo from './logo.svg';
import './App.css';
// Router
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Home from './components/Home'
// import News from './components/News'
// import Donate from './components/Donate'
// import Gallery from './components/Gallery'

class App extends Component {
  render () {
	const HomeComponent = () => (<Home/>)
	// const NewsComponent = () => (<News/>)
	return (
		<Router>
		 <div className="App">
		  <Route exact path="/" render={HomeComponent}/>
		 </div>
		</Router>
	);
  }
}

export default App;

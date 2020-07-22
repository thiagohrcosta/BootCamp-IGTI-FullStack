import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import SearchBar from './components/search/SearchBar';
import Content from './components/content/Content';

import './App.css';

class App extends Component{
  state = {
    response: ""
  };

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({response: res.express}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);

    return body;
  };
};

function App() {
  return (
    <div className="backgroundBody">
      <Navbar />
      <Carousel />
      <SearchBar />
      <Content />
      <Footer />      
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer';
import './App.css';

class App extends Component{

  state = {
    sideDrawerOpen: false

  };

  drawerToggleClickHandler=()=>{

    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

backdropClickHandler = () =>{

  this.setState({sideDrawerOpen: false});

};


  render()
  {
    let backdrop;

    if(this.state.sideDrawerOpen)
    {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  return (
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
           <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <main style={{marginTop: '64px'}}><p className="head"><h3>Heading</h3></p></main>
      <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiu
      smod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
      quip ex ea commodo consequat.Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
      pteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiu
      smod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
      quip ex ea commodo consequat.Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
      pteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiu
      smod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
      quip ex ea commodo consequat.Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
      pteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiu
      smod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
      quip ex ea commodo consequat.Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
      pteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiu
      smod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
      quip ex ea commodo consequat.Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
      pteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiu
      smod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
      quip ex ea commodo consequat.Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
      pteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiu
      smod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
      quip ex ea commodo consequat.Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
      pteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiu
      smod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
      quip ex ea commodo consequat.Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
      pteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      <br />
      <br />
      </div>
      <Footer />
    </div>
  );
}
}

export default App;
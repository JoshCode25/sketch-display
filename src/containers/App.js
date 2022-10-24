import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {sketchArray} from '../sketchArray';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sketches: sketchArray,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { sketches, searchfield } = this.state;
    const filteredSketches = sketches.filter(sketch =>{
      let filterboolean = false;
      let nameFilter = sketch.name.toLowerCase().includes(searchfield.toLowerCase());
      let projectFilter = sketch.project.toLowerCase().includes(searchfield.toLowerCase());
      let typeFilter = sketch.type.toLowerCase().includes(searchfield.toLowerCase());

      if( nameFilter || projectFilter || typeFilter) {
        filterboolean = true;
      }
      return filterboolean;
    })
    return !sketches.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Josh's Sketches</h1>
          <div className='flex flex-row justify-center'>
            <SearchBox searchChange={this.onSearchChange}/>
          </div>
          <Scroll>
            <CardList sketches={filteredSketches} />
          </Scroll>
        </div>
      );
  }
}

export default App;
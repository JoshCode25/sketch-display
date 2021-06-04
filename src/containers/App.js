import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import FilterBox from '../components/FilterBox';
import {sketchArray} from '../sketchArray';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sketches: sketchArray,
      searchfield: '',
      // searchId: 'name'
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ sketches: users})});
  // }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { sketches, searchfield } = this.state;
    const filteredSketches = sketches.filter(sketch =>{
      return sketch.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !sketches.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Josh's Sketches</h1>
          <div className='flex flex-row justify-center'>
            <FilterBox/>
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
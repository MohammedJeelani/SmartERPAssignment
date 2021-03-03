import React, { Component } from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import { FaSearch } from "react-icons/fa"



class First extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search: ''
        }
    }
    
    handleSearchChange=(event) =>{
        this.setState({
            search: event.target.value
        })
    }
    render() {
        return (
            <div>
                <header>
                <input id="searchbar" type="text" value={this.state.search} onChange={this.handleSearchChange}placeholder=" 🔍Search.........."></input>
                <button type="reset" id="search" defaultValue="reset"onClick={this.handleSearchChange}>  <FaTimesCircle /></button>
                </header>
                
            </div>
        )
    }
}

export default First

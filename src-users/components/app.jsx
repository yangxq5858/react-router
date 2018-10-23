import React,{Component} from 'react'

import Search from './search'
import Main from './main'

export default class App extends Component{
    state={
        searchName:''
    }

    getSearchName = (searchName) =>{
        this.setState({searchName})
    }


    render(){
        return (
            <div className="container">
                <Search getSearchName={this.getSearchName}/>
                <Main searchName={this.state.searchName}/>
            </div>
        );
    }
}

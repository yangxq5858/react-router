import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component{


    static propTypes = {
        getSearchName:PropTypes.func.isRequired
    }

    handleClick = () =>{
        const searchName = this.searchInput.value.trim();
        const {getSearchName} = this.props;
        getSearchName(searchName);
    }


    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={x=>this.searchInput = x}/>
                    <button onClick={this.handleClick}>Search</button>
                </div>
            </section>
        );
    }
}

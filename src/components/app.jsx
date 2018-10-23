import React, {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import MyNavlink from './mynavlink'
import About from '../views/about'
import Home from '../views/home'


export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*导航路由链接*/}
                            <MyNavlink className="list-group-item" to='/about/338'>About</MyNavlink>
                            <MyNavlink className="list-group-item" to='/home'>Home</MyNavlink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*可切换的路由组件*/}
                                <Switch>
                                    <Route path='/about/:idx' component={About}/>
                                    <Route path='/home' component={Home}/>
                                    {/*表示默认跳转到第一个about组件*/}
                                    <Redirect to='/about/338'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

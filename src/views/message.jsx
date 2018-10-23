import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'

import MessageDetail from './message-detail'

export default class Message extends Component {
    state = {
        messageList: []
    }

    componentDidMount() {
        // 模拟发送ajax请求
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'msg001'},
                {id: 2, title: 'msg002'},
                {id: 3, title: 'msg003'},
                {id: 4, title: 'msg004'}
            ]
            //更新状态数据
            this.setState({messageList: messages})

        }, 1000)

    }

    showDetail = (id) =>{
        this.props.history.push(`/home/message/messageDetail/${id}`);
    }

    showDetail2 = (id) =>{
        this.props.history.replace(`/home/message/messageDetail/${id}`);
    }

    forward = ()=>{
        this.props.history.goForward()
    }

    back = () =>{
        this.props.history.goBack()
    }

    render() {
        const {messageList} = this.state
        return (
            <div>

                <ul>
                    {
                        messageList.map((message, idx) => {
                            return (
                                <li key={idx}>
                                    {/*这里用的是es6的格式化语法*/}
                                    {/*<a href={`/home/message/messageDetail/${message.id}`}>{message.title}</a>*/}
                                    <Link to={`/home/message/messageDetail/${message.id}`}>{message.title} </Link>
                                    &nbsp;
                                    <button onClick={() =>this.showDetail(message.id)}>push查看</button>
                                    &nbsp;
                                    <button onClick={() =>this.showDetail2(message.id)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <p>
                    <button onClick={this.forward}>前进</button>
                    <button onClick={this.back}>回退</button>
                </p>

                <Route path='/home/message/messageDetail/:id' component={MessageDetail} />
            </div>
        );
    }
}

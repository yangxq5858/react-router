import React,{Component} from 'react'
import PropTypes from 'prop-types'
//引入自己的组件或css等文件时，空一行
import './commentItem.css'

export default class CommentItem extends Component{

    static propType = {
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    };

    handleClick = () =>{
        const {comment,deleteComment,index} = this.props;
        //提示删除
        if (window.confirm(`是否要删除${comment.username}的评论吗?`)){
            //删除
            deleteComment(index);
        }
    };

    render(){

        // const content = this.props.content;
        const {comment} = this.props;

        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleClick}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        );
    }
}



import React from 'react'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.saveComment = this.saveComment.bind(this);
    }

/*    constructor(props){
        super(props);
        this.state = {
            comments:[
                {username:"Tom",content:"React 挺好的"},
                {username:"Jack",content:"React 好难！"}
            ]
        }
    }*/

    //简便写法：给组件对象指定state属性，这里的App是组件类，组件类中用到了this，this表示的是这个类的实例对象
    state = {
        comments:[
            {username:"Tom",content:"React 挺好的"},
            {username:"Jack",content:"React 好难！"}
        ]
    };

    saveComment(comment){
        const comments = this.state.comments;
        comments.push(comment);
        this.setState(comments);
    }

    deleteComment = (index) =>{
        const comments = this.state.comments;
        // 使用splice函数对数组 CUD 操作
        comments.splice(index,1); //表示删除index元素
        // comments.splice(index,0,{}); //表示增加一个元素（删除0个元素，并传入一个新的元素）
        // comments.splice(index,1,{}); //表示修改一个元素

        this.setState(comments);
    };

    render() {
        // const comments = this.state.comments;
        const {comments} = this.state;//这是上面这条语句的简写
        const saveComment = this.saveComment;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd saveComment={saveComment}/>
                    <CommentList comments={comments} deleteComment = {this.deleteComment}/>
                </div>
            </div>
        )
    }
}

export default App
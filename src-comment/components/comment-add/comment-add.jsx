import React from 'react'
import PropTypes from 'prop-types'

class CommentAdd extends React.Component {

    constructor(props) {
        super(props);
        // this.addComment = this.addComment.bind(this);
    }

    static propTypes = {
        saveComment: PropTypes.func.isRequired
    }

    // 定义state的结构为form表单中元素的结构，用于收集表单数据
    state = {
        username: '',
        content: ''
    };

    //用了箭头函数后，就可以不用bind(this)了。它是一个委托，默认就带有this
    addComment = () => {

        /*  const username = this.usernameInput.value;
          const comment = this.commentInput.value;

          if (username.trim()==='' || comment.trim() === '') return;
          this.usernameInput.value = '';
          this.commentInput.value = '';
          let object = {username:username,content:comment};

          //获取上级组件的保存方法
          const saveComment = this.props.saveComment;
          saveComment(object);*/
        const comment = this.state;
        if (comment.username.trim() === '' || comment.content.trim() === '') return;
        this.setState({
            username:'',content:''
        });
        //获取上级组件的保存方法
        const saveComment = this.props.saveComment;
        saveComment(comment);
    };

    handleUsernameChange = (event) => {
        const username = event.target.value;
        this.setState({username});
    };

    handleContentChange = (event) => {
        const content = event.target.value;
        this.setState({content});
    };

    render() {
        const comment = this.state;

        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={comment.username}
                               onChange={this.handleUsernameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={comment.content}
                                  onChange={this.handleContentChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default CommentAdd
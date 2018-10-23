import React from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './commentList.css'


class CommentList extends React.Component {
    // 给类指定属性，需要用到static
    static protoTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    };

    render() {
        const {comments, deleteComment} = this.props;
        const display1 = comments.length === 0 ? 'block' : 'none';

        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                {/*设置是否显示*/}
                <h2 style={{display:display1}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {comments.map((comment, idx) => {
                        return (
                            <CommentItem comment={comment} key={idx} deleteComment={deleteComment} index={idx}/>
                        );

                    })}

                </ul>
            </div>
        )
    }
}

// 设置组件传入的props对象的类型和时候必须，这里不用这么写，在顶部有简写方式
/*CommentList.protoTypes = {
    comments:PropTypes.array.isRequired
}*/


export default CommentList
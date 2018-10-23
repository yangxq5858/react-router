import React from 'react'

// 模拟从后台取得的数据
const allMessages = [
    {id:1,title:'msg001',content:'你好啊'},
    {id:2,title:'msg002',content:'我很好'},
    {id:3,title:'msg003',content:'是吗？'},
    {id:4,title:'msg004',content:'当然'}
]

export default function MessageDetail(props){


    // debugger //打开调试
    const id = props.match.params.id;
    // 返回第一个匹配到的元素
    const message = allMessages.find((m)=>m.id === id * 1)

    console.log(message);


    return(




        <ul>

            <li>ID:{message.id}</li>
            <li>Title:{message.title}</li>
            <li>Content:{message.content}</li>

        </ul>



    )
}
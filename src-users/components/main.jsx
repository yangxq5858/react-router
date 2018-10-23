import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


export default class Main extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }

    state = {
        initView: true, //初始化UI
        loading: false, //加载中
        users: null,    //返回的结果
        errorMsg: null  //返回的错误信息
    };


    //组件将要获取新的属性时，触发，这个方法是React的内置方法
    componentWillReceiveProps(newProps) {
        const oldName = this.props.searchName //这个是更新前的属性值
        const {searchName} = newProps
        //开始请求
        this.setState({
            initView: false,
            loading: true
        })
        //
        const url = `https://api.github.com/search/users?q=${searchName}`

        axios.get(url).then(response => {
            const result = response.data
            const users = result.items.map(item =>
                    // (
                    //    {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}
                    // )
                {
                    return {name: item.login, url: item.html_url, avatarUrl: item.avatar_url}
                }
            )

            // 注意：这里map的语法 map(item=>{return xx对象}) 或者是 map(item=>(xx对象))


            this.setState({
                loading: false,
                users: users
            })

        }).catch(error => {
            this.setState({
                loading: false,
                errorMsg: error.message
            })
        })
    }

    render() {
        const {initView, loading, users, errorMsg} = this.state;
        if (initView) {
            return <h2>请输入关键字进行搜索{this.props.searchName}</h2>
        } else if (loading) {
            return <h2>正在请求中...</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, idx) => {
                            return (
                                <div className="card" key={idx}>
                                    <a href={user.url} target="_blank">
                                        <img src={user.avatarUrl} style={{width: 100}}/>
                                    </a>
                                    <p className="card-text">{user.name}</p>
                                </div>
                            );
                        })
                    }
                </div>
            )
        }


    }
}

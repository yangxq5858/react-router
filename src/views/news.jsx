import React, {Component} from 'react'

export default class News extends Component {
    state = {
        newsArr: ['news001', 'news002', 'news003']
    }


    render() {
        const {newsArr} = this.state

        return (
            <ul>
                {
                    newsArr.map(
                        (news, idx) => <li key={idx}>{news}</li>
                    )
                }
            </ul>
        );
    }
}

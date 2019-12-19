import React, { Component } from 'react'

class NotFound extends Component {


    componentDidMount(){
        this.props.onError()
    }

    render() {
        let { data } = this.props

        return (
        <div>
            <h1 className="display-4 lead mt-4"><span className="text-primary">404 {data}</span> Page Not Found</h1>
            <p className="lead">Sorry, this page doent exists!!</p>
        </div>
        )
    }
}


export default NotFound
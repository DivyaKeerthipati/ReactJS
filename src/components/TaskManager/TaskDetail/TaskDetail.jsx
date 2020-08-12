import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { taskUrl } from '../../../config/api'

class TaskDetail extends Component {

    state = {
        task: null

    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(taskUrl + '/' + id)
            .then(res => {
                this.setState({
                    task: res.data
                })
            })
    }

    render() {

        const { task } = this.state

        if (!task) return <p>Loading...</p>

        return (
            <Card>
                <CardHeader>
                    <h3>{task.title}</h3>
                </CardHeader>

                <CardBody>
                    <p>{task.description}</p>
                    <p>
                        <Link to="/tasks">Back to Tasks</Link>
                    </p>
                </CardBody>
            </Card>
        )

    }


}

export default TaskDetail

// const TaskDetail = props => {

//     const {id} = props.match.params

//     return (
//         <Card>
//             <CardHeader>
//                 <h3>Test Title {id} </h3>
//             </CardHeader>

//             <CardBody>
//                 <p>This is a test description for the tasks.</p>
//                 <p>
//                     <Link to ="/tasks">Back to Tasks</Link>
//                 </p>
//             </CardBody>
//         </Card>
//     )
// }

// export default TaskDetail
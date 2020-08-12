import React, { Component } from 'react'
import axios from 'axios'
import { ListGroup } from 'reactstrap'

import TaskItem from './TaskItem/TaskItem.jsx'
import { taskUrl } from '../../../config/api.js'

class TaskList extends Component {

    state = {
        tasks: [],
        loading: false
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        axios.get(taskUrl)
            .then((res) => {
                this.setState({
                    tasks: res.data,
                    loading: false
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        const { tasks } = this.state

        if (tasks.length === 0) {
            return <p>No Tasks to Show</p>
        }

        return (
            <ListGroup>
                {tasks.map(t => <TaskItem key={t.id} task={t} />)}
            </ListGroup>
        )

    }

}

export default TaskList


// const TaskList = (props) => {

//     const { tasks } = props

//     if (tasks.length === 0) {
//         return <p>No Tasks to Show</p>
//     }

//     return (
//         <ListGroup>
//             {tasks.map(t => <TaskItem key={t.id} task={t} />)}
//         </ListGroup>
//     )
// }

// export default TaskList
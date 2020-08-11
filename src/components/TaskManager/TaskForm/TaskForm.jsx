import React, {Component} from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const data = this.state
        this.props.add(data)

        this.setState({
            title: '',
            description: ''
        })
    }

    handleChange = (e) => {
        //console.log(e.target.id, e.target.value)
        if(e.target.id === 'title'){
            this.setState({
                title: e.target.value
            })   
        } else if(e.target.id === 'description'){
            this.setState({
                description: e.target.value
            })
        }
    }

    //  handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('Inside Handle Submit')

    //     const title = document.getElementById('title')
    //     const description = document.getElementById('description')

    //     const data = {
    //         title: title.value,
    //         description: description.value
    //     }

    //     console.log(data)
    //     title.value = ''
    //     description.value = ''
    // }

    render(){
        const { title, description } = this.state

        return (
            <Form onSubmit = {this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value = {title} onChange={this.handleChange}/>
                </FormGroup>
    
                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input type="textarea" id="description" rows= {5} value={description} onChange={this.handleChange} />
                </FormGroup>
    
                <Button color="primary">Add</Button>
    
            </Form>
            )

    }

}

export default TaskForm
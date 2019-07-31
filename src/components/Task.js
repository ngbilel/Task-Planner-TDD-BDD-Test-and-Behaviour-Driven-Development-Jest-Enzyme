import React, {Component}  from 'react'
import  {Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap'
class   Task extends Component {
    constructor(props){
        super(props);
        this.state={
            person: '',
            task:''
        }
    }

    render(){
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel >Person</FormLabel>
                        <FormControl className='input-person' onChange={(e)=>this.setState({person:e.target.value})} />
                    </FormGroup>    
                    <FormGroup>
                        <FormLabel>Task</FormLabel>
                        <FormControl className='input-task' onChange={(e)=>this.setState({task:e.target.value})} />
                    </FormGroup>
                </Form>
            </div>
        )     

    }      
}

export default Task
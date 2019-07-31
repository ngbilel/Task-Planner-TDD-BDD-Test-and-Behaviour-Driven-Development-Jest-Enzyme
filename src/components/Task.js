import React, {Component}  from 'react'
import  {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
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
                        <FormControl className='input-person' onChange={(e)=>this.setState({person:e.target.value})} />
                    </FormGroup>
                </Form>
            </div>
        )     

    }      
}

export default Task
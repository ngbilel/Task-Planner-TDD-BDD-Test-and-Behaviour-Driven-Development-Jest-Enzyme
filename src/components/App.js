import React, {Component} from 'react';
import {Button} from 'react-bootstrap' 

class App extends Component {
    constructor(propos){
        super(propos)
        this.state={
            tasks:[]
        }
    }

    addTask = () => {
        //Local copy of the state
        const {tasks} = this.state;
        //Find the Max task id and push the task object with the Max id +1 to Tasks Array then update the state
        const ids=this.state.tasks.map(task=> task.id);
        const maxId = ids.length > 0 ? Math.max(...ids) : 0 ;
        tasks.push({ id: maxId +1 });
        this.setState({tasks});
    }

    render() {
        return (
            <div>
                <h3> Task Planner </h3>
                <Button className="btn-add" onClick={this.addTask}></Button>
            </div>
        )
    }
}

export default App
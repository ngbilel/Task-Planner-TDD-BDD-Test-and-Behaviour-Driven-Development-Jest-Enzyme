import React from 'react';
import {shallow} from 'enzyme';
import Task from './Task';

describe('Task',()=>{
    const task = shallow (<Task/>);
    const person ='Teddy';
    const taskToDo='Do Unit Test';

    
    it('Render porperly',()=>{
        expect(task).toMatchSnapshot();
    })

    it('initializes a person and task in `state`',()=>{
        expect(task.state()).toEqual({person: '', task:''})
    })

    describe('When typing in person input',()=>{
        beforeEach(()=>{
            task.find('.input-person').simulate('change',{target:{value:person}})
        })

        it('updates the person in `state`',()=>{
            expect(task.state().person).toEqual(person)
        })
    })

    describe('When typing in task input',()=>{
        beforeEach(()=>{
            task.find('.input-task').simulate('change',{target:{value:taskToDo}})
        })

        it('updates the task in  `state`',()=>{
            expect(task.state().task).toEqual(taskToDo)
        })

       
    })
    
})


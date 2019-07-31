import React from 'react';
import {shallow } from 'enzyme';
import App from './App';
import { isTSAnyKeyword, isThisTypeAnnotation, isBigIntLiteral } from '@babel/types';


describe('App', ()=> {

    const app = shallow(<App/>);

    //check that the component render correctly 
    it('render correctly', ()=>{
        expect(app).toMatchSnapshot();
    })

    it('initializes the `state`  with  an empty list of tasks',()=>{
        expect(app.state().tasks).toEqual([])
    })

    describe('When Clicking the `Add Task` Button',()=>{

        beforeEach(()=>{
            app.find('.btn-add').simulate('click');
        })

        afterEach(()=>{
            app.setState({tasks:[]});
        })

        it('add a new task to `state` when clicking the `add task` button', ()=>{
            expect(app.state().tasks).toEqual([{id:1}]);
        })
        
        it('add a new task to the render list when clicking the `add task` button',()=>{
            expect(app.find('.task-list').children().length).toEqual(1);
        })

        it('Creates a Task compoenent', ()=>{
            expect(app.find('Task').exists()).toBe(true);
        })

    })

})

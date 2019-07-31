import React from 'react';
import {shallow } from 'enzyme';
import App from './App';
import { isTSAnyKeyword, isThisTypeAnnotation, isBigIntLiteral } from '@babel/types';

const app = shallow(<App/>);

//check that the component render correctly 
it('render correctly', ()=>{
    expect(app).toMatchSnapshot();
})

it('initializes the `state`  with  an empty list of tasks',()=>{
    expect(app.state().tasks).toEqual([])
})

it('add a new task to `state` when clicking the `add task` button', ()=>{
    app.find('.btn-add').simulate('click');
    expect(app.state().tasks).toEqual([{id:1}]);
})

it('add a new task to the render list when clicking the `add task` button',()=>{
    app.find('.btn-add').simulate('click');
    expect(app.find('.task-list').children().length).toEqual(2);
})

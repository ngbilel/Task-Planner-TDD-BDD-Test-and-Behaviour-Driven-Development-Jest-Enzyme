import React from 'react';
import {shallow } from 'enzyme';
import App from './App';
import { isTSAnyKeyword, isThisTypeAnnotation, isBigIntLiteral } from '@babel/types';

const app = shallow(<App/>);

//check that the component render correctly 

it('render correctly', ()=>{
    expect(app).toMatchSnapshot();
})


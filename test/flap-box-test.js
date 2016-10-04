import test from 'ava';
import {mount} from 'enzyme';
import FlapBox from  '../demo/examples/flap-box.jsx';
import React, {Component, PropTypes}  from 'react'

test(t=> {
    const props = {key1: 'value1'};
    const wrapper = mount(<FlapBox {...props}/>)
    t.true(wrapper.props().key1 == props.key1);
});

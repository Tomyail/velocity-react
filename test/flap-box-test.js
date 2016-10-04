import test from 'ava';
import {mount} from 'enzyme';
import FlapBox from  '../demo/examples/flap-box.jsx';
import React,{ Component, PropTypes }  from 'react'

test(t=> {
    const wrapper = mount(<FlapBox />)
    t.true(wrapper.displayName)
});

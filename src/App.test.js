import React from "react";
import Enzyme, { shallow } from "enzyme";

import { findByTestAttr } from "./../test/testUtils";
import App from "./App";

import EnzymeAdapter from "enzyme-adapter-react-16";


// Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup =()=>{
    return shallow(<App/>);
}

test("App render without error",()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper,"component-app");
    expect(component.length).toBe(1);
});



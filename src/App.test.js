import React from "react";
import Enzyme, { shallow, mount } from "enzyme";

import { findByTestAttr } from "./../test/testUtils";
import App from "./App";
import hookActions from "./actions/hookActions";


import EnzymeAdapter from "enzyme-adapter-react-16";

const mockGetSecretWord = jest.fn();


// Enzyme.configure({ adapter: new EnzymeAdapter() });

// const setup =()=>{
//     return shallow(<App/>);
// }

const setup =()=>{
    mockGetSecretWord.mockClear();
    hookActions.getSecretWord = mockGetSecretWord;
    
    // use mount, beacause useEffect not call on `shallow`
    // https://github.com/airbnb/enzyme/issues/2086
    return mount(<App/>);
}
test("App render without error",()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper,"component-app");
    expect(component.length).toBe(1);
});

describe("getSecretWord calls",()=>{
    test("getSecretWord gets called on App mount",()=>{
        setup();

        //check to see if secret word was updated
        expect(mockGetSecretWord).toHaveBeenCalled();
    });
    test("secretWord does not update on App update",()=>{
        const wrapper = setup();
        mockGetSecretWord.mockClear();
        // wrapper.update doesn't trigger update 
        wrapper.setProps();

        expect(mockGetSecretWord).not.toHaveBeenCalled();
    })
})


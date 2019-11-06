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

const setup =(secretWord="party")=>{
    mockGetSecretWord.mockClear();
    hookActions.getSecretWord = mockGetSecretWord;
    
    const mockUseReducer = jest.fn()
        .mockReturnValue([
            {secretWord},
            jest.fn()
        ]);

        React.useReducer = mockUseReducer;
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
});

describe("secretWord is not null",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup("party")
    });
    test("renders app when secretWord is not null",()=>{
        const appComponnet = findByTestAttr(wrapper,"component-app");
        expect(appComponnet.exists()).toBe(true);
    });
    test("does not render spinner when secretWord is not null",()=>{
        const spinnerComponnet = findByTestAttr(wrapper,"spinner");
        expect(spinnerComponnet.exists()).toBe(false);
    });
});


describe("secretWord is null",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup(null)
    });
    test("does not renders app when secretWord is not null",()=>{
        const appComponnet = findByTestAttr(wrapper,"component-app");
        expect(appComponnet.exists()).toBe(false);
    });
    test("render spinner when secretWord is not null",()=>{
        const spinnerComponnet = findByTestAttr(wrapper,"spinner");
        expect(spinnerComponnet.exists()).toBe(true);
    });
})



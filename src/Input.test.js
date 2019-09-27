import React from "react";
import  { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "./../test/testUtils";
import Input from "./Input";


const setup =(secretWord="party")=>{
    return shallow(<Input secretWord={secretWord}/>);
}

test("Input renders without error",()=>{
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper,"component-input");
    expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected prop",()=>{
    checkProps(Input, {secretWord:"party"})
});

describe("state controlled input filed",()=>{
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    beforeEach(()=>{
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(()=> ["",mockSetCurrentGuess]);

        wrapper = setup();
    })
    test("state update with value of input box upon changes",()=>{
       
        const inputBox = findByTestAttr(wrapper,"input-box");

        const mockEvent = { target: {value:"train"}};
        inputBox.simulate("change",mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
    });
    test("field is cleard upon submit button",()=>{

        const submitButton = findByTestAttr(wrapper,"submit-button");

        const mockEvent = { target: {value:"train"}};
        submitButton.simulate("click",{preventDefault() {}});

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    });
});
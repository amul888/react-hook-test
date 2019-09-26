// import React from "react";
// import { shallow } from "enzyme";
// // import EnzymeAdapter from "enzyme-adapter-react-16";
// // import CheckPropTypes from "check-prop-types";

// import { findByTestAttr , checkProps} from "./test/testUtils";
// import Congrats from "./Congrats";



// // Enzyme.configure({adapter:new EnzymeAdapter()});

// const defaultProps = {success: false};

// const setup = (props={})=>{
//     const setupProps = {...defaultProps,...props}
//     return shallow(<Congrats {...setupProps}/>)
// }
// test("renders without error", ()=>{
//  const wrapper = setup({success:false});
//  const component = findByTestAttr(wrapper,'component-congrats');
//  expect(component.length).toBe(1);
// })

// test("renders no text when `success` props is false", ()=>{
//  const wrapper = setup({success:false});
//  const component = findByTestAttr(wrapper,'component-congrats');
//  expect(component.text().length).toBe(0);

// })

// test("renders non-reply congrtas message when `success` props is true", ()=>{
//     const wrapper = setup({success:true});
//     const message = findByTestAttr(wrapper,'congrats-message');
//     expect(message.text()).not.toBe(0);
    
// })

// test('does not throw warning with expected props',()=>{
//     const expectedProps = {success:false}
//     // const propError =  CheckPropTypes(Congrats.propTypes,expectedProps,'props',Congrats.name);
//     // expect(propError).toBeUndefined();
//     checkProps(Congrats,expectedProps);
// })

test('does not throw warning with expected props',()=>{
})
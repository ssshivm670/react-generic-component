import React from "react";
import { shallow } from "enzyme";
import ButtonComponent from "./ButtonComponent";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("Testing button component", () => {
  let component;
  const setUp = ()=>{
    const mockCallBack = jest.fn();
    return shallow((<ButtonComponent name ="123" onClick={mockCallBack} />));
  }

  it("Should render button component", () => {
    component =setUp();
    expect(component.exists());
  });

  it("Should simulate click", () => {
    const mockCallBack = jest.fn();
    component = shallow((<ButtonComponent name ="123" onClick={mockCallBack} />));
    component.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});

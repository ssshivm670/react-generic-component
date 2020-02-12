import React from "react";
import { shallow } from "enzyme";
import ButtonComponent from "./ButtonComponent";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("Testing button component", () => {
  let component;
  
  it("Should render button component", () => {
    component = shallow(<ButtonComponent />);
    expect(component.exists());
  });

  it("Should simulate click", () => {
    const mockCallBack = jest.fn();
    const button = shallow((<ButtonComponent onClick={mockCallBack} />));
    button.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

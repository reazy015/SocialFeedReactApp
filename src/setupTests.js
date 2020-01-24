// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react-hooks';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
export { shallow, render, mount } from "enzyme";


Enzyme.configure({ adapter: new Adapter() });

export default Enzyme;
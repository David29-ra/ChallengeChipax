import ReactDOM from 'react-dom';
import { screen } from '@testing-library/react';
import { Footer } from '../components/footer';

let divroot = null;
beforeEach(() => {
  divroot = document.createElement("div");
  document.body.append(divroot);
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(divroot);
  divroot.remove();
  divroot = null;
})

test("component Footer render", () => {
  ReactDOM.render(<Footer />, divroot);

  const message = document.querySelector("a");
  expect(message.textContent).toBe("github repository");
})

test("component Footer render check with screen", () => {
  ReactDOM.render(<Footer />, divroot);

  const madeby = screen.getByText("github repository");
  expect(madeby).toBeInTheDocument();
})

test("component Footer, its a tag with class footer-link", () => {
  ReactDOM.render(<Footer />, divroot);

  const message = document.querySelector("a");
  expect(message.className).toBe("footer-link");
})

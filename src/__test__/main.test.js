import ReactDOM from 'react-dom';
import { Mainpage } from '../components/main';

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

test('should render all components', () => {
  ReactDOM.render(<Mainpage />, divroot);

  const headerpart = document.querySelector("header");
  const bodypart = document.querySelector("div.results");
  const footerpart = document.querySelector("footer");

  expect(headerpart).toBeInTheDocument();
  expect(bodypart).toBeInTheDocument();
  expect(footerpart).toBeInTheDocument();
})

test('should count tag p exist on mainpage', () => {
  ReactDOM.render(<Mainpage />, divroot);

  const paragraphs = document.querySelectorAll("p");

  expect(paragraphs.length).toBe(2);
})

test('should valid Title and subtitle and footer', () => {
  ReactDOM.render(<Mainpage />, divroot);

  const title = document.querySelector("header h1");
  const subtitle = document.querySelector("header p");
  const footermessage = document.querySelector("footer p");

  expect(title.textContent).toBe("Rick and Morty Challenge");
  expect(subtitle.textContent).toBe("Made by David Rivas");

  expect(footermessage.textContent).toBe("Made by Monito Inc.");
})


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

test('should count tag p and a exist on mainpage', () => {
  ReactDOM.render(<Mainpage />, divroot);

  const paragraphs = document.querySelectorAll("p");
  const links = document.querySelectorAll("a");

  expect(paragraphs.length).toBe(1);
  expect(links.length).toBe(1);
})

test('should valid Title and subtitle and footer', () => {
  ReactDOM.render(<Mainpage />, divroot);

  const title = document.querySelector("header h1");
  const subtitle = document.querySelector("header p");
  const footermessage = document.querySelector("footer a");

  expect(title.textContent).toBe("Rick and Morty Challenge");
  expect(subtitle.textContent).toBe("Made by David Rivas");

  expect(footermessage.textContent).toBe("github repository");
})


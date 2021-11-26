import ReactDOM from 'react-dom';
import { screen } from '@testing-library/react';
import { Footer } from '../components/footer';

let divroot = null;
beforeEach(() => {
  divroot = document.createElement("div");
  document.body.append(divroot);
})

test("component Footer render without name prop", () => {
  ReactDOM.render(<Footer />, divroot);

  const message = document.querySelector("p");
  expect(message.textContent).toBe("Made by ");
})

test("component Footer render with name prop", () => {
  ReactDOM.render(<Footer name={"Monito"}/>, divroot);

  const madeby = screen.getByText("Made by Monito");
  expect(madeby).toBeInTheDocument();
})

test("component Footer, its p tag with class footer", () => {
  ReactDOM.render(<Footer />, divroot);

  const message = document.querySelector("p");
  expect(message.className).toBe("footer");
})

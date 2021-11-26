import ReactDOM from 'react-dom';
import { screen } from '@testing-library/react';
import { Header } from '../components/header';

let divroot = null;
beforeEach(() => {
  divroot = document.createElement("div");
  document.body.append(divroot);
})

test("component Header render without name prop and title prop", () => {
  ReactDOM.render(<Header />, divroot);

  const title = document.querySelector("h1");
  const subtitle = document.querySelector("p");

  expect(title.textContent).toBe("");
  expect(subtitle.textContent).toBe("Made by ");
})

test("component Header render with name prop and title prop", () => {
  ReactDOM.render(<Header title="I'm title" name="Roco" />, divroot);

  const title = screen.getByText("I'm title");
  const subtitle = screen.getByText("Made by Roco");

  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
})

test("component Header, its p tag with class footer and h1 tag with class title", () => {
  ReactDOM.render(<Header title="I'm title" name="Roco" />, divroot);

  const title = document.querySelector("h1");
  const subtitle = document.querySelector("p");

  expect(title.className).toBe("title");
  expect(subtitle.className).toBe("footer");
})  
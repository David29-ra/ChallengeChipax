import ReactDOM from 'react-dom';
import { Results } from '../components/results';

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

test('Component Results render', () => {
  ReactDOM.render(<Results />, divroot);

  const container = document.querySelector('div');
  const content = JSON.parse(container.textContent);

  expect(content.length).toBe(2);
  expect(content[0].exercise_name).toBe("Char counter");
  expect(content[1].exercise_name).toBe("Episode locations");

})

test('should exist div and pre tag', () => {
  ReactDOM.render(<Results />, divroot);

  const divPart = document.querySelector('div.results');
  const prePart = document.querySelector('pre');

  expect(divPart).toBeInTheDocument();
  expect(prePart).toBeInTheDocument();
})

test('should exist class results on div tag', () => {
  ReactDOM.render(<Results />, divroot);

  const divPart = document.querySelectorAll('div');

  expect(divPart[1].className).toBe('results');
})


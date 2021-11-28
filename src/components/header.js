// Header component, return header with title and subtitle
export function Header({title, name}) {
  return (
    <header>
      <h1 className="title" >{title}</h1>
      <p className="subtitle" >Made by {name}</p>
    </header>
  )
}
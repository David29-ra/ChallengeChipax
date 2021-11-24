export function Header({title, name}) {
  return (
    <header>
      <h1 className="title" >{title}</h1>
      <p className="footer" >Made by {name}</p>
    </header>
  )
}
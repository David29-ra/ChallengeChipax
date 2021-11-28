// Footer component, return footer with nickname of user
export function Footer({name}) {
  return (
    <footer>
      <p className="footer">Made by {name}</p>
    </footer>
  )
}
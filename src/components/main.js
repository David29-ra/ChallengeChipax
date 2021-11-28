import { Results } from "./results";
import { Footer } from "./footer";
import { Header } from "./header";

// Main component, return the main layout header, results and footer
export function Mainpage() { 
  return (
    <>
      <Header title="Rick and Morty Challenge" name="David Rivas"/>
      <Results />
      <Footer name="Monito Inc."/>
    </>
  )
}
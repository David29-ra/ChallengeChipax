import { Results } from "./body";
import { Footer } from "./footer";
import { Header } from "./header";


export function Mainpage() { 
  return (
    <>
      <Header title="Rick and Morty Challenge" name="David Rivas"/>
      <Results />
      <Footer name="David Rivas"/>
    </>
  )
}
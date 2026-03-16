
import './App.css'
import { Suspense } from "react";
import Countries from './component/countries/Countries'


const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

function App() {


  return (
    <>

      <Suspense fallback={<p>Nadir vhi loading.....</p>}>
            <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
     
    </>
  )
}

export default App

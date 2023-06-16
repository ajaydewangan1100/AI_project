import HeroVideo from "./components/HeroVideo"
import Section2 from "./components/TopFeaturesCard"
// import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"

function App() {

  return (
    <div className="max-w-full overflow-x-hidden text-gray-800 scroll-smooth ">
    {/* Hero Video section */}
      <HeroVideo />

      {/* Corousel trial */}
      {/* <Coros />  */}
    
    {/* Section 2 */}
      <Section2 />

    {/* Section 3 */}
      <Section3 />


     {/* Section 4 */}
     <Section4 />

      
    </div>
  )
}

export default App

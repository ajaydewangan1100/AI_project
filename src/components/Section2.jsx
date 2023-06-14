import React from 'react'
import TopFeaturesCard from './TopFeaturesCard'

const Section2 = () => {

  const TopFeatursAi = [
    {
      img:"src/assets/img2.png",
      name:"Video AI",
      link:"#"
    },
    {
      img:"src/assets/insta.jpg",
      name:"Insta Reels AI",
      link:"#"
    },
    {
      img:"src/assets/in_tech.png",
      name:"Chat AI",
      link:"#"
    },
    {
      img:"src/assets/ai_img.jpg",
      name:"Travel AI",
      link:"#"
    }
  ]

  return (
    <div className='text-center mx-5 my-20'>
      <h1 className=' bold text-4xl border inline m-auto rounded-2xl px-4 py-2  '>Top Features</h1>

      <TopFeaturesCard TopFeatursAi={ TopFeatursAi } />
    </div>
  )
}

export default Section2
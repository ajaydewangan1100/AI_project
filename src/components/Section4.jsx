import React from 'react'

const Section4 = () => {
    const reviesArray =  [
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem fugit itaque iste?",
            name:"first"
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem fugit itaque iste?",
            name:"second"
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem fugit itaque iste?",
            name:"third"
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem fugit itaque iste?",
            name:"fourth"
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem fugit itaque iste?",
            name:"fifth"
        },
    ]
    const listAllReviews = reviesArray.map((items, index) => {
        return (
            <div key={ index } className='min-w-[200px] max-w-[400px] w-[25vw] hover:shadow-2xl p-3 py-4 justify-between min-h-[150px] bg-gray-800 text-gray-100 duration-[300ms] flex flex-col items-center mt-4 rounded rounded-2xl'>
                <p>{ items.desc }</p>
                <h3 className='text-white font-bold w-full text-right px-5 text-orange-400 mt-5'>{ items.name }</h3>
            </div>
        )
    })
       
  return (
    <div className='text-center mx-5 my-20 mx-14 hover:shadow-2xl duration-[300ms] flex flex-col items-center p-5 rounded-2xl '>
        <h1 className=' bold text-4xl border inline m-auto rounded-2xl px-4 py-2 my-10  '>Reviews from AI Artists</h1>

        <div className='w-full flex flex-row flex-wrap justify-evenly gap-5  '>
            {listAllReviews}
        </div>
    </div>
  )
}

export default Section4
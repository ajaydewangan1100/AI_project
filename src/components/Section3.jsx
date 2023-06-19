import React from 'react'

const Section3 = () => {
    const moreAiList =  [
        {
            ul:"Today's Most Popular",
            liItems:[1,2,3]
        },
        {
            ul:"Critics Choice",
            liItems:[1,2,3]
        },
        {
            ul:"Entertainment AI",
            liItems:[1,2,3]
        },
        {
            ul:"Editor AI",
            liItems:[1,2,3]
        },
    ]

    const list = moreAiList.map((item, index) => {
        return (
            <div key={ index } className='min-w-[200px] w-[20vw] font-bold hover:shadow-2xl duration-[300ms] flex flex-col items-center mt-4 border rounded rounded-2xl py-2 px-1'>
                <h1 className='py-2 pb-3 '>{ item.ul }</h1>
                <ul className='w-full text-left px-5'>
                    {
                        item.liItems.map((itm, idx) => {
                            return(
                                <li key={ idx } className='text-orange-400'>{ itm }.</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    })

    // original return
  return (
    <div  className='text-center bg-gray-100 py-20'>
        <h1 className=' bold text-4xl border inline m-auto rounded-2xl px-4 py-2 my-10 '>Explore More AI's</h1>
        <div className='w-full flex flex-row flex-wrap gap-5 justify-center pt-10 '>
            {list}
        </div>
    </div>
  )
}

export default Section3
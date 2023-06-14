import React from 'react'

const TopFeaturesCard = (props) => {
    // console.log(props.TopFeatursAi);
    const listShow = props.TopFeatursAi.map((item, index) => {
        
        return (
            <a href={ item.link } className='min-w-[10vw] w-[20vw]  hover:shadow-2xl duration-[300ms] flex flex-col items-center my-20 border rounded rounded-2xl p-2' key={ index }>
            <img className='min-w-[100px] w-[100px] h-[100px] rounded-full my-5 hover:shadow-xl durration-[200ms] ' src={ item.img } />
            <div
            className='text-xl text-gray-800 font-bold'>
                <h1 className='w-full py-5 px-1 '>{ item.name }</h1>
            </div>
        </a>
        )
    })
    // console.log(listShow)

  return (
    <div className='w-full flex flex-row justify-evenly  '>
        { listShow }
    </div>
  )
}

export default TopFeaturesCard
import React from 'react';

const teamObjs=[
  {
    Image:'images/team1.png',
    name:'Blake Mathews',
    rank:'CEO & Co-founder'
  },
    {
    Image:'images/team2.png',
    name:'Jack Newman',
    rank:'CTO'
  },
    {
    Image:'images/team3.png',
    name:'Serinia Martins',
    rank:'Marketing'
  },
    {
    Image:'images/team4.png',
    name:'Spencer Wright',
    rank:'Project management'
  },
    {
    Image:'images/team5.png',
    name:'Caroline Ming',
    rank:'Sales'
  },
    {
    Image:'images/team6.png',
    name:'Anna Mills',
    rank:'Design Lead'
  },
]

const Team = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] items-center lg:items-start flex flex-col lg:flex-row gap-9'>
      <div className='flex flex-col'>
        <h3 className='h3-bold mb-[30px]'>Our talented team</h3>
        <p className='mb-[30px] text-wrap'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odio deserun
        </p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          teamObjs.map((item, index)=>{
            return(
              <div key={index} className='flex flex-col rounded-[11px] bg-lightviolet w-[264px]
              lg:mr-[200px]'>
                <img src={item.Image} alt={item.name} width={264} height={224}/>
                <div className='flex flex-col p-[20px] rounded-[10px]'>
                  <h5 className='h5-bold'>{item.name}</h5>
                  <p className='text-sm text-gray-500'>{item.rank}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Team

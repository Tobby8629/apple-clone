import React from 'react'
import { appleImg, bagImg, searchImg } from '../../utils'
import { navLists } from '../../constants'

const Nav = () => {
  return (
    <nav className='py-5 screen-max-width max-md:p-6 flex justify-between items-center'>
      <img src={appleImg} alt='apple logo'  width={18} height={10} />
      <ul className='max-sm:hidden flex gap-10'>
        {navLists.map((list)=>(
         <li key={list} className='hiw-text'>
            <a href={`#${list}`}>{list}</a>
         </li>
        ))}
      </ul>
      <div className='flex gap-7 items-center'>
        <img src={searchImg} alt='search' width={18} height={10} />
        <img src={bagImg} alt='cart' width={18} height={10} />
      </div>
    </nav>
  )
}

export default Nav
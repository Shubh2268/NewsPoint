import React from 'react'
import { Bars } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className='flex justify-center my-7'>
      <Bars height="30" width="30" color="#000000" />
    </div>
  )
}

export default Loader

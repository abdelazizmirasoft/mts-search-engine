import React from 'react'
import {Rings} from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Rings color="#22c55e" height={550} width={80} />
    </div>
  )
}

import React from 'react'
import H1 from '../h1'
import { commentator } from './constants';
import CommentSection from './commentSection';

const Review: React.FC = () => {
  return (
    <div className='h-[600px] w-auto flex flex-col justify-center'>
        <H1 className='text-center my-12'>Hear It Straight From Our Customers.</H1>
        <CommentSection comments={commentator} />
    </div>
  )
}

export default Review
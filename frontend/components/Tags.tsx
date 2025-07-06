import React from 'react'
interface TagsProps {
  tag: string;
}
export default function Tags({tag}:TagsProps) {
  return (
    <div className='border border-indigo-600 bg-[#d8ddfa] text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold'>
        {tag}
    </div>
  )
}

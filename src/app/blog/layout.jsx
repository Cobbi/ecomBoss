import React from 'react'

export default function BlogLayout({children}) {
  return (
    <div>
        <h5 className='text-2xl text-bold text-center py-5'>Enjoy our exciting blog posts</h5>
        {children}
    </div>
  )
}

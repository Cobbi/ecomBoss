"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

  const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', 
        {
          next:{revalidate:10},
          cache:'no-store'
      });
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data.slice(0, 3));
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);
    // const blogPosts = [
    //   {
    //     id: 1,
    //     title: 'First Blog Post',
    //     description: 'Description of the first blog post goes here.',
    //     image: '/shop.jpg',
    //   },
    //   {
    //     id:2,
    //     title: 'Second Blog Post',
    //     description: 'Description of the second blog post goes here.',
    //     image: '/shop.jpg',
    //   },
    //   {
    //     id:3,
    //     title: 'Third Blog Post',
    //     description: 'Description of the third blog post goes here.',
    //     image: '/shop.jpg',
    //   },
    // ];

  return (
    <div className='flex'>
         <div className="flex flex-col w-full mx-auto justify-between">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex mb-8">
              <div className='mx-7'>
                <Image src={'/shop.jpg'} alt="Blog Post Image" width={300} height={50} className="mb-4 rounded-lg" />
              </div>
              <div className='w-[60%] float-right'>
                <h4 className="text-2xl mb-2">{post.title}</h4>
                <p className="text-gray-500 mb-4">{post.body}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link href={`blog/${post.id}`}>Read More</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )}
  


export default Blog;

import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

const Form = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const navi = useNavigate()


  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10 mt-24">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Create a Blog Post</h2>
        
        <input
        onChange={(e) => {
            setTitle(e.target.value)
        }}

        value={title}
          type="text"
          name="title"
          placeholder="Enter your blog title"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        
        <input
        onChange={(e) => {
            setAuthor(e.target.value)
        }}

        value={author}
          type="text"
          name="author"
          placeholder="Enter your name"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        
        <textarea
        onChange={(e) => {
            setContent(e.target.value)
        }}
        value={content}
          name="content"
          placeholder="Enter your blog content"
          rows="5"
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
        />
        
        <button onClick={async() => {
            const data = await fetch("http://localhost:8080/newblog", {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    title : title,
                    author : author,
                    content : content
                })
            })

            const json = await data.json()
            navi("/home")

        }} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200">
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default Form;

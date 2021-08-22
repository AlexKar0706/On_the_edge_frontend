/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function AdminPanel() {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        getStories();
      }, []);


    const getStories = async() => {
      await axios
        .get('https://on-the-edge.herokuapp.com/stories')
        .then((res)=> {
            setStories(res.data);
        })
        .catch((err)=>console.log(err))
    }
    console.log(stories);
    return (
        <div>
            <h1>This is admin panel</h1>

            {stories.map((story: any,index: any) => {
               return <p>{story.storyPath}</p>
            })
            }
           
        </div>
    )
}

export default AdminPanel;
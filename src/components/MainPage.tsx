import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function MainPage() {
    const [stories, setStories] = useState<Array<String>>([]);
    return (
        <div>
            <h1>Main Page</h1>
            <p>Stories:</p>
        </div>
    )
}

export default MainPage;
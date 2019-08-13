import React from 'react';

const data = {
    name: 'mike',
    age: 29,
    height: 74,
    eyeColor: 'brown'
}

const HomePage = (props) => {
    return (
        <div>
            <header>HomePage</header>
            <main>
                <p>this is the home page</p>
                <span>lets get some data: name: {data.name}, age: {data.age}</span>
            </main>
        </div>
    )
}

export default HomePage;
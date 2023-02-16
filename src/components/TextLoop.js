import React from 'react';
import Typical from 'react-typical';



const TextLoop = () => {
    return (
    <div>
        <h4>Hello there!👋 My name is</h4>
        <h1>Oliver Stenström</h1>
            <p>
                I'm a 
                <Typical 
                loop={Infinity}
                wrapper="b" 
                steps={[
                    1000,
                    ' {developer}',
                    1000,
                    ' <webdesigner>',
                    1000,
                    ' 🤝team player🤝',
                    1000,
                    ' 🎾sportsman🎾',
                    1000,
                    ' 🍜food-enthusiast🍜',
                    1000
                ]}
                />
            </p>
    </div>
    )
}

export default TextLoop
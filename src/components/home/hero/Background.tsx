import React from 'react'
import Image from 'next/image'

const Background = () => {
    return (
        <div className='w-full h-screen'>
            <Image
                src="/images/Ellipse 16.svg"
                width={1000}
                height={1000}
                alt="ellipse"
                className="absolute -top-[60px] z-0 object-cover"
            />
            <Image
                src="/images/background.svg"
                width={1000}
                height={1000}
                alt="un"
                className="absolute -top-[150px] left-[550px] z-10 object-cover"
            />
        </div>
    )
}

export default Background
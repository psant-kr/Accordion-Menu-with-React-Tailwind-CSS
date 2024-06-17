import React from 'react'
import Accordian from './Accordian'

function FAQ() {
    return (
        <div className='p-4 bg-gray-200 rounded-lg'>
            <Accordian
                title='Do you prefer Android or ios'
                answer='I like to use Android products'
            />
            <Accordian
                title='Do you prefer writing CSS or Tailwind?'
                answer='I like to use Tailwind'
            />
            <Accordian
                title='Firebase or Superbase'
                answer='I am using Appwrite!'
            />
        </div>
    )
}

export default FAQ
import React from 'react'

function About() {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world.</h2>
                <p className='text-3xl py-6 text-gray-500'>Among the industry’s leading cloud management platform tools, Flexera’s comprehensive Cloud Management Platform (CMP) provides a rich set of capabilities for discovery, template-based provisioning, orchestration and automation; operational monitoring and management; governance; and cost optimization across multiple public and private clouds as well as virtual and bare-metal servers.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-10 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-2xl hover:scale-110 ease-in-out duration-500'>
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-2xl hover:scale-110 ease-in-out duration-500'>  
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-2xl hover:scale-110 ease-in-out duration-500'>  
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default About
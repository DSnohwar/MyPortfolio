import React from 'react'
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-xl relative group'
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
                    <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            <Link href={previewUrl}>
                                
                                    <div className="ring-2 ring-[#4b98ce] rounded-full w-10 h-10 flex items-center justify-center  mb-4 hover:ring-white hover:border-opacity-80 transition-all duration-300">
                                        <EyeIcon className="w-6 h-6 font-bold text-[#4b98ce] hover:text-white hover:border-[#47799d] hover:border-opacity-80 transition-all duration-300" />
                                    </div>
                            </Link>
                            <Link href={gitUrl}>
                                <div className="ring-2 ring-[#4b98ce] rounded-full w-10 h-10 flex items-center justify-center">
                                    <CodeBracketIcon className="w-6 h-6 text-[#4b98ce] hover:text-white hover:border-[#47799d] hover:border-opacity-80 transition-all duration-300" />
                                </div>
                            </Link>
                        </div>
                    </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
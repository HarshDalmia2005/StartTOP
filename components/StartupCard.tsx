import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dummyImg from '@/public/globe.svg'

const StartupCard = ({ post }: { post }) => {
    const { _createdAt, title, description, image, author: { _id: authorId, name: authorname }, views, category, _id } = post
    return (
        <li className=' shadow-lg rounded-lg p-4 shadow-black shadow-left-lg'>
            <div className=" text-black font-semibold text-center mb-4 flex items-center justify-between">
                <p className='bg-amber-300 rounded-full px-6 py-2'>
                    {formatDate(_createdAt)}
                </p>
                <p className='flex items-center gap-2 bg-amber-200 rounded-xl px-3 py-2'>
                    <EyeIcon className='size-5' />
                    <span>{views}</span>
                </p>
            </div>


            <div className='flex justify-between items-center'>
                <div className='flex-col justify-center gap-4 text-black'>
                    <Link href={`/user/${authorId}`} className='flex items-center gap-2'>{authorname}</Link>
                    <Link href={`/startup/${_id}`} className='text-xl font-bold'>{title}</Link>
                </div>
                <Link href={`/user/${authorId}`} className='flex items-center gap-2'>
                    <Image src={dummyImg} alt={'placeholder'} width={50} height={50} className='rounded-lg my-4' />
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p>{description}</p>
                <Image src={`${image}`} alt={title} width={500} height={300} className='rounded-lg my-4' />
            </Link>

            <div className='flex items-center justify-between'>

                <Link href={`/?query=${category.toLowerCase()}`} className='bg-amber-100 rounded-lg px-6 py-2'>
                    <p>{category}</p>
                </Link>
                <button>
                    <Link href={`/startup/${_id}`} className='bg-black text-white rounded-full px-6 py-2'>
                        Details
                    </Link>
                </button>
            </div>
        </li>
    )
}

export default StartupCard
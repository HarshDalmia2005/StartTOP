"use client"
import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.Search-form') as HTMLFormElement
        if (form) {
            form.reset()
        }
    }
    return (
        <button type='reset' className='absolute right-12 -translate-1/2 btn btn-ghost btn-sm rounded-full bg-black text-white p-2' onClick={reset}>
            <Link href={"/"} className='flex items-center justify-center gap-2'>
                <X className='size-5'/>
            </Link>
        </button>
    )
}

export default SearchFormReset
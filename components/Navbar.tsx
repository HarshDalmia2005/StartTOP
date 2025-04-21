import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const session = await auth();
    // console.log(session)
    return (
        <header className='flex items-center justify-between px-6 py-3 bg-white shadow-sm font-sans text-xl font-semibold'>
            <nav className='flex justify-between items-center'>
                <Link href='/' className='text-2xl font-bold text-gray-800'>
                    <Image src='/logo.png' alt='Logo' width={144} height={50}  />
                </Link>
            </nav>

            <div className="flex items-center justify-center gap-8 text-black">
                {
                    session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span> Create</span>
                            </Link>

                            <form
                                action={async () => {
                                    "use server"
                                    await signOut()
                                }}
                            >
                                <button type="submit">SignOut</button>
                            </form>

                            <Link href={`/user/${session?.user?.id}`} className='flex items-center gap-2'>
                                <img src={session?.user?.image || ""} alt="User" width={60} height={40} className='rounded-full' />
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form
                            action={async () => {
                                "use server"
                                await signIn("github",{ redirectTo: "/" })
                            }}
                        >
                            <button type="submit">Signin with GitHub</button>
                        </form>
                    )
                }
            </div>
        </header >
    )
}

export default Navbar
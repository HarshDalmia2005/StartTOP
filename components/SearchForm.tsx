import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

export default function Page({query}: {query?: string}) {
  
  return (
    <Form action="/" scrolling='false' className="Search-form flex items-center justify-center gap-2 pb-6 relative ">
      <input
        name="query"
        defaultValue={query}
        className='border-4 border-black bg-white rounded-full w-96 px-6 py-3 text-black placeholder-b text-lg font-semibold focus:outline-none '
        placeholder="Search for a startup idea..."
      />
      <div className='flex gap-2'>
        {query && <SearchFormReset/>}

        <button type='submit' className='search-btn  absolute right-1 -translate-1/2 btn btn-ghost btn-sm rounded-full bg-black text-white p-2 hover:cursor-pointer'>
          <Search className='size-5'/>
        </button>
      </div>
    </Form>
  )
}
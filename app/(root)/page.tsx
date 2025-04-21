import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { formatDate } from "@/lib/utils";

export default async function Home({ searchParams }: { searchParams: { query?: string } }) {
  const query = (await searchParams).query || "";

  const posts = [
    {
      _createdAt: new Date().toISOString(),
      _id: "1",
      title: "Startup 1",
      description: "This is a description of startup 1",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: { _id: 1 ,name: "Author"},
      views: 55,
      category: "Tech",
    }
  ]
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-3 border-t-black border-t-4 border-b-4 border-b-black bg-amber-500 text-white  space-y-5">
          <h1 className="text-7xl font-semibold py-3 text-center">Welcome to <span className="text-blue-900 font-bold text-8xl">StartTOP</span></h1>
          <h2 className="text-4xl bg-black px-6 py-3 font-bold uppercase text-center">
            Pitch Your Startup,<br />
            Connect with Entrepreneurs
          </h2>
          <p className="text-xl">Submit your ideas, Vote on Pitches and get noticed in Virtual Competitions </p>
          <SearchForm query={query} />
        </div>
      </section>

      <section>
        <p className="text-3xl font-semibold text-center py-6">
          {query ? `Search Results for "${query}"` : "All Startups"}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {
            posts?.length > 0 ? posts.map((post) => {
              return (
               <StartupCard
                  key={post._id}
                  post={post}
                />
              )
            }
            ) : (
              <li className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-semibold">No results found</h3>
              </li>
            )}
        </ul>
      </section>
    </>
  );
}

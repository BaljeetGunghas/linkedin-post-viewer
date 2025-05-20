"use client";
import LinkdinHeader from "@/components/LinkdinHeader";
import PostCard from "@/components/PostCard";
import useFetchPosts from "@/hooks/useFetchPosts";


export default function Home() {

  const filters = {
    keyword: "AI",
    sortBy: "engagement",
    page: 1,
    contentType: "",
  };

  const { data, loading, error } = useFetchPosts(filters);

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <LinkdinHeader />
      {loading && <p className="text-center">Loading posts...</p>}
      {error && <p className="text-center text-red-500 max-w-xl mx-auto my-3 text-sm">{error}</p>}

      <div className='p-4 rounded-lg  mb-6 w-full max-w-5xl mx-auto my-3'>
        {data?.data.items && data.data.items.map((post) => (
          <PostCard key={post.urn} post={post} />
        ))}
      </div>
    </main>
  );
}

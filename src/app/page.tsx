"use client";
import LinkdinHeader from "@/components/LinkdinHeader";
import PostCard from "@/components/PostCard";
import PostSkeleton from "@/components/PostSkeleton";
import useFetchPosts from "@/hooks/useFetchPosts";
import { FiltersState, LinkedInPost } from "@/types/postTypes";
import { useState, useMemo } from "react";

export default function Home() {
  const [isTop3Clicked, setIsTop3Clicked] = useState(false);
  // const [postData, setPostData] = useState<LinkedInApiResponse | null>(null);


  const [filters, setFilters] = useState<FiltersState>({
    keyword: "",
    page: 1,
    contentType: "",
  });

  const { data, loading, error } = useFetchPosts(filters);


  const handleApplyFilters = (newFilters: FiltersState) => {
    setFilters(newFilters);
  };
  const top3Posts = useMemo<LinkedInPost[]>(() => {
    if (!data?.data.items) return [];
    return [...data.data.items]
      .sort(
        (a, b) =>
          (b.socialActivityCountsInsight?.totalReactionCount || 0) -
          (a.socialActivityCountsInsight?.totalReactionCount || 0)
      )
      .slice(0, 3);
  }, [data]);

  const displayedPosts = isTop3Clicked ? top3Posts : data?.data.items || [];


  const handleloadMore = () => {
    setFilters((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <LinkdinHeader
        onApply={handleApplyFilters}
      />

      {loading &&
        <div className="p-4 rounded-lg mb-6 w-full max-w-5xl mx-auto my-3 space-y-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <PostSkeleton key={i} />
          ))}
        </div>

      }
      {error && (
        <p className="text-center text-red-500 max-w-xl mx-auto my-3 text-sm">
          {error}
        </p>
      )}
      {!loading && <div className="p-4 rounded-lg mb-6 w-full max-w-5xl mx-auto my-3">
        <h2
          onClick={() => setIsTop3Clicked((prev) => !prev)}
          className={`text-sm py-1 px-3 w-fit font-semibold cursor-pointer ${isTop3Clicked ? "bg-blue-200" : "bg-white"
            } rounded-2xl text-gray-800 mb-4`}
        >
          {isTop3Clicked ? "Show All Posts" : "Top 3 most engaging posts"}
        </h2>

        {displayedPosts.map((post) => (
          <PostCard key={post.urn} post={post} />
        ))}

        {!isTop3Clicked && data?.data?.total && data?.data?.total > 10 && <div className="flex justify-center">
          <button
            onClick={handleloadMore}
            className="w-1/4 m-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer transition duration-200"
          >
            Load More
          </button>
        </div>}

      </div>}
    </main>
  );
}

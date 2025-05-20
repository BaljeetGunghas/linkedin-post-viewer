"use client";

import Link from "next/link";
import { LinkedInPost } from "../types/postTypes";

const PostCard = ({ post }: { post: LinkedInPost }) => {
    if (!post) return null;

    const profileImage = post.author?.profilePictures?.[0]?.url || "";

    // Get highest-quality video thumbnail or document image
    // const videoThumbnail = post.video?.thumbnails?.[1]?.url || post.video?.thumbnails?.[0]?.url;
    const videoUrl = post.video?.video?.[0]?.url;

    return (
        <div className="bg-background p-4 rounded-lg shadow mb-6 w-full max-w-2xl mx-auto">

            {/* Author Section */}
            <Link href={post.author.url} target="_blank" className="flex items-center mb-3 cursor-pointer">
                {profileImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
                )}
                <div>
                    <h3 className="font-semibold text-black">{post.author?.fullName || "Unknown User"}</h3>
                    <p className="text-sm text-gray-500">{post.author?.headline || "No headline"}</p>
                </div>
            </Link>

            {/* Main Text */}
            {post.text && <p className="mb-3 text-gray-800 whitespace-pre-line">{post.text}</p>}

            {/* Images  */}
            {post.image &&
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={post.image[post.image.length - 2].url}
                    alt={`Post Image ${post.image[post.image.length - 2].url}`}
                    className="rounded mb-3 w-full h-96 object-cover"
                    height={post.image[post.image.length - 2].height}
                    width={post.image[post.image.length - 2].width}
                />
            }



            {/* Artical */}
            {post.article.title && (
                <div className="article-preview relative mb-3 h-56 bg-postLinkBackground" style={{
                    backgroundImage: `url(${post.article.link})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} >
                    <a href={post.article.link} target="_blank" aria-label={`Open article: ${post.article.title}`} rel="noopener noreferrer">
                        <div className="absolute bottom-0  bg-postLinkBackground rounded">
                            <h4 className="text-black font-semibold">{post.article.title}</h4>
                            <small className="text-gray-300">{post.article.subtitle}</small>
                        </div>
                    </a>
                </div>
            )}

            {/* Media Content */}
            {videoUrl && (
                <video controls className="rounded mb-3 w-full h-96 object-cover">
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            {post.resharedPost?.document && !videoUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={post.resharedPost.document}
                    alt="LinkedIn Media"
                    className="rounded mb-3 w-full"
                />
            )}

            {/* Reshared Post */}
            {post.resharedPost && (
                <div className="bg-gray-100 p-3 rounded mb-3">
                    <h4 className="font-medium">{post.resharedPost.author?.username || "Unknown Author"}</h4>
                    <p className="text-sm text-gray-800">{post.resharedPost.text}</p>
                    {post.resharedPost.document && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={post.resharedPost.document}
                            alt="Reshared Media"
                            className="mt-2 rounded w-full"
                        />
                    )}
                </div>
            )}

            {/* Footer Info */}
            <div className="text-sm text-gray-500 flex justify-between items-center">
                <span>{new Date(post.postedDateTimestamp).toLocaleString()}</span>
                <span>👍 {post.socialActivityCountsInsight?.totalReactionCount ?? 0} reactions</span>
            </div>

            {/* Link to Post */}
            <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 mt-3 hover:underline"
            >
                View on LinkedIn
            </a>
        </div>
    );
};

export default PostCard;

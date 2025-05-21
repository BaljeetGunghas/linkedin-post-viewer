"use client";

import Link from "next/link";
import { LinkedInPost } from "../types/postTypes";
import userImage from '../asset/user.png';
import Image from "next/image";
import ImageModal from "./ImageModel";
import { useState, useCallback } from "react";

const PostCard = ({ post }: { post: LinkedInPost }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const profileImage = post.author?.profilePictures?.[0]?.url || "";
    const videoUrl = post.video?.video?.[0]?.url;
    const mainImage = post.image?.[post.image.length - 2]?.url || post.image?.[0]?.url || "";

    const handleImageClick = () => {
        if (mainImage) {
            setSelectedImage(mainImage);
        }
    };

    const handleCloseModal = useCallback(() => {
        setSelectedImage(null);
    }, []);

    if (!post) return null;
    return (
        <>
            <div className="bg-background p-4 rounded-lg shadow mb-6 w-full max-w-2xl mx-auto">

                {/* Author */}
                <Link href={post.author?.url || "#"} target="_blank" className="flex md:items-center mb-3 cursor-pointer">
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

                {/* Text */}
                {post.text && (
                    <p className="mb-3 text-sm text-gray-800 whitespace-pre-line">
                        {post.text}
                    </p>
                )}

                {/* Main Image */}
                {mainImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={mainImage}
                        alt="Post Image"
                        className="rounded mb-3 w-full h-96 object-cover cursor-pointer"
                        onClick={handleImageClick}
                    />
                )}

                {/* Video */}
                {videoUrl && (
                    <video controls className="rounded mb-3 w-full h-96 object-cover">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}

                {/* Reshared Post */}
                {post.resharedPost && (
                    <div className="bg-gray-100 p-3 rounded mb-3">
                        {post.resharedPost.author?.username && (
                            <Link
                                href={post.resharedPost.author?.url || "#"}
                                target="_blank"
                                className="flex items-center mb-3 cursor-pointer"
                            >
                                <Image
                                    src={userImage}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full mr-3 object-cover"
                                />
                                <h3 className="font-semibold text-black">
                                    {`${post.resharedPost.author.firstName ?? ""} ${post.resharedPost.author.lastName ?? ""}`.trim() || "Unknown Author"}
                                </h3>
                            </Link>
                        )}
                        <p className="text-sm text-gray-800  whitespace-pre-line">{post.resharedPost.text}</p>
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

                {/* Article */}
                {post.article?.title && (
                    <div
                        className="article-preview relative mb-3 h-56 bg-secondrybg rounded overflow-hidden"
                        style={{
                            backgroundImage: `url(${post.article.link})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <a
                            href={post.article.link}
                            target="_blank"
                            aria-label={`Open article: ${post.article.title}`}
                            rel="noopener noreferrer"
                            className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-80"
                        >
                            <h4 className="text-black font-semibold">{post.article.title}</h4>
                            <small className="text-gray-600">{post.article.subtitle}</small>
                        </a>
                    </div>
                )}

                {/* Footer */}
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

            {/* Modal */}
            {selectedImage && (
                <ImageModal imageUrl={selectedImage} setShowModal={handleCloseModal} />
            )}
        </>
    );
};

export default PostCard;

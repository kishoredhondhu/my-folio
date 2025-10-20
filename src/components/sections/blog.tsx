"use client";

import { useState, useEffect } from "react";
import { USER_NAMES } from "../constants/data";
import { MdOutlineArrowOutward, MdArrowForward } from "react-icons/md";
import { SiMedium } from "react-icons/si";
import Link from "next/link";

// =============================================
// TYPES
// =============================================
interface Blog {
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
}

// Type for a single post item from the RSS-to-JSON service
interface MediumPost {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  content: string;
}

// =============================================
// API & UTILITY FUNCTIONS
// =============================================
const fetchMediumBlogs = async (): Promise<Blog[]> => {
  const rssUrl = `https://medium.com/feed/@${USER_NAMES.mediumUsername}`;
  const apiEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
    rssUrl
  )}`;

  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    const posts: MediumPost[] = data.items?.slice(0, 3) || [];

    // Correctly map over the posts array
    return posts.map((post: MediumPost) => ({
      title: post.title,
      brief:
        post.description.replace(/<[^>]*>?/gm, "").substring(0, 150) + "...",
      url: post.link,
      publishedAt: post.pubDate,
      readTimeInMinutes: Math.ceil(post.content.split(/\s+/).length / 200),
    }));
  } catch (error) {
    console.error("Error fetching Medium blogs:", error);
    return [];
  }
};

const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (USER_NAMES.mediumUsername) {
      fetchMediumBlogs()
        .then(setBlogs)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return { blogs, loading };
};

// =============================================
// MAIN COMPONENT
// =============================================
const BlogSection = () => {
  const { blogs, loading } = useBlogs();

  if (!USER_NAMES.mediumUsername) {
    return null;
  }

  const mediumUrl = `https://medium.com/@${USER_NAMES.mediumUsername}`;

  return (
    <section className="py-5" id="blog">
      <h2 className="text-xl font-semibold mb-4">latest blogs.</h2>

      <div className="mb-4 flex items-center gap-1">
        <Link
          href={mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link text-sm font-mono font-medium text-muted-foreground transition-colors flex items-center gap-1"
        >
          <SiMedium className="inline-block align-middle mr-1" size={16} />@
          {USER_NAMES.mediumUsername}
          <MdOutlineArrowOutward className="inline-block w-4 h-4 ml-1" />
        </Link>
      </div>

      {loading ? (
        <div className="text-center text-muted-foreground py-8 text-base animate-pulse">
          Loading latest blogs...
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center text-muted-foreground py-8 text-base">
          No blogs found.
        </div>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.url}
              className="box bg-background border border-border p-4"
            >
              <div className="flex flex-col gap-1">
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-base text-foreground transition-colors w-fit"
                >
                  {blog.title}
                </a>
                <p className="text-sm leading-tight text-muted-foreground line-clamp-2">
                  {blog.brief}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span>{blog.readTimeInMinutes} min read</span>
                  </div>
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-link font-medium transition"
                  >
                    Read More
                    <MdArrowForward className="inline-block w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogSection;
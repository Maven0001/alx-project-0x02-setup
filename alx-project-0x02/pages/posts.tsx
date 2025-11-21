// pages/posts.tsx
import { useState, useEffect } from "react";
import PostCard from "../components/common/PostCard";
import Header from "../components/layout/Header";
import { getStaticProps } from "next/dist/build/templates/pages";

interface Post {
  id: number;
  title: string;

  userId: number;
}

getStaticProps;

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Post[] = await res.json();
        setPosts(data.slice(0, 12)); // Show first 12 posts
      } catch (err) {
        setError("Could not load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
            Blog Posts
          </h1>
          <p className="text-center text-xl text-gray-600 mb-12">
            Latest posts from JSONPlaceholder API
          </p>

          {loading && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">Loading posts...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-2xl text-red-600">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} title={post.title} userId={post.userId} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

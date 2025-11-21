import { useState, useEffect } from "react";
import UserCard from "../components/common/UserCard";
import Header from "../components/layout/Header";

import { type UserProps } from "../interfaces";
import { getStaticProps } from "next/dist/build/templates/pages";

getStaticProps();
export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data: UserProps[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError("Could not load users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-4">
            Our Users
          </h1>
          <p className="text-center text-xl text-gray-600 mb-12">
            Meet the amazing people from JSONPlaceholder
          </p>

          {loading && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500 animate-pulse">
                Loading users...
              </p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-2xl text-red-600">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                address={user.address}
                phone={user.phone}
                website={user.website}
                company={user.company}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

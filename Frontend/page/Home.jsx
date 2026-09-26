import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/bookstore/")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((erro) => toast.error(erro.response.data));
  }, []);
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-indigo-300">
              <BookOpen size={22} />
              <span className="font-medium">Welcome to BookHub</span>
            </div>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Discover Your
              <span className="block text-indigo-400">Next Favorite Book</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Explore our collection of interesting books and discover stories,
              knowledge and ideas that can change your life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#books"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Explore Books
                <ArrowRight size={18} />
              </a>

              <Link
                to="/login"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section
        id="books"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10">
          <p className="font-semibold text-indigo-600">OUR COLLECTION</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Popular Books
          </h2>

          <p className="mt-2 text-gray-500">Browse our latest collection.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

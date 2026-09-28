import axios from "axios";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function UpdateBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/bookstore/" + id).then((res) => {
      const { name, descreption, author, price } = res.data[0];

      setName(name);
      setAuthor(author);
      setDescription(descreption);
      setPrice(price);
    });
  }, []);

  function updateHandler(e) {
    e.preventDefault();
    axios
      .patch("http://localhost:3000/api/v1/bookstore/" + id, {
        name,
        author,
        description,
        price,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error.response.data));
  }

  return (
    <>
      <div className=" mt-6 ml-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
            <BookOpen size={25} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Update Book
            </h1>

            <p className="text-sm text-gray-500">Update your books</p>
          </div>
        </div>
      </div>

      <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 mt-6 m-10">
        <h2 className="mb-6 text-xl font-bold text-gray-900"></h2>

        <form
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          onSubmit={updateHandler}
        >
          {/* Book Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Book Name
            </label>

            <input
              name="name"
              required
              placeholder="Book Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Book description
            </label>

            <textarea
              name="name"
              required
              placeholder="Book description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border max-h-20 min-h-12 border-gray-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Author */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Author
            </label>

            <input
              name="author"
              required
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Selling Price
            </label>

            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              type="number"
              required
              placeholder="Selling Price"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-5">
            <button
              type="submit"
              className="rounded-lg bg-gray-900 px-7 py-3 font-semibold text-white transition cursor-pointer hover:bg-black"
            >
              Update book
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateBook;

import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
function BookInfo() {
  const [book, setBook] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/bookstore/" + params.id)
      .then((res) => {
        setBook(res.data[0]);
      })
      .catch((rej) => {
        console.log(rej.response);
      });
  }, []);

  function deleteBook(id) {
    // console.log(id);

    axios.delete("http://localhost:3000/api/v1/bookstore/" + id).then(() => {
      toast.success("book deleted successfully");
    });

    navigate("/");
  }

  function updateBook(id) {
    console.log(id);
  }

  return (
    <div className="w-screen h-[calc(100vh-66px)]  flex items-center justify-center overflow-x-hidden  ">
      <div className="h-102 group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl w-150">
        <div className=" flex h-40 items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
          <BookOpen
            size={75}
            strokeWidth={1.3}
            className="text-white transition duration-300 group-hover:scale-110"
          />
        </div>

        <div className="p-5 relative">
          <div className="absolute right-5 top-8 flex flex-col space-y-2 ">
            <button
              className="h-10 w-30 bg-red-500 border-2 border-red-700 rounded-md cursor-pointer text-white font-bold"
              onClick={() => deleteBook(book._id)}
            >
              Delete
            </button>

            <Link to={"/update/:id"}>
              <button
                className="h-10 w-30 bg-green-500 border-2 border-green-700 rounded-md cursor-pointer text-white font-bold"
                onClick={() => updateBook(book._id)}
                
              >
                Update
              </button>
            </Link>
            <select className="h-10 w-30 bg-white border-2  rounded-md  text-black flex items-center justify-center">
              <option value="published">Publish</option>
              <option value="notpublished">not Published</option>
            </select>
          </div>
          <h2 className="truncate text-xl font-bold text-gray-900">
            {book?.name}
          </h2>

          <p className="mt-2 line-clamp-2 min-h-10 text-sm text-gray-500">
            {book?.descreption}
          </p>

          <div className="mt-4 relative">
            <p className="text-sm text-gray-500">Author</p>

            <p className="font-semibold text-gray-800">{book?.author}</p>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
            <div>
              <p className="text-xs text-gray-400">Price</p>

              <p className="text-lg font-bold text-indigo-600">
                ${book?.price}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400">Published</p>

              <p className="text-sm font-medium text-gray-700">
                {book?.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;

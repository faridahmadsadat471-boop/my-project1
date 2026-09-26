import { BookOpen, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const navigate = useNavigate();
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Book image area */}
      <div className="flex h-52 items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
        <BookOpen
          size={75}
          strokeWidth={1.3}
          className="text-white transition duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-5 relative">
        <Info
          onClick={() => {
            navigate(`${book._id}`);
          }}
          size={28}
          className="absolute right-5 top-6 cursor-pointer hover:scale-95 "
        />

        <h2 className="truncate text-xl font-bold text-gray-900">
          {book?.name}
        </h2>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm text-gray-500">
          {book?.descreption}
        </p>

        <div className="mt-4 relative">
          <p className="text-sm text-gray-500">Author</p>

          <p className="font-semibold text-gray-800">{book.author}</p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Price</p>

            <p className="text-lg font-bold text-indigo-600">${book.price}</p>
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
  );
}

export default BookCard;

import { useState } from "react";
import { Trash2, Pencil, Plus, X, BookOpen } from "lucide-react";

function Dashboard() {
  const [books, setBooks] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    title: "",
    author: "",
    price: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      title: "",
      author: "",
      price: "",
      date: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setBooks(
        books.map((book) =>
          book.id === editingId
            ? {
                ...book,
                ...form,
                price: Number(form.price),
              }
            : book,
        ),
      );
    } else {
      const newBook = {
        id: Date.now(),
        ...form,
        price: Number(form.price),
      };

      setBooks([...books, newBook]);
    }

    resetForm();
  };

  const handleEdit = (book) => {
    setForm({
      name: book.name,
      title: book.title,
      author: book.author,
      price: book.price,
      date: book.date,
    });

    setEditingId(book.id);
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?",
    );

    if (confirmDelete) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
                <BookOpen size={25} />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Book Dashboard
                </h1>

                <p className="text-sm text-gray-500">Manage your books</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            {showForm ? <X size={19} /> : <Plus size={19} />}
            {showForm ? "Close" : "Add Book"}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              {editingId ? "Edit Book" : "Add New Book"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
            >
              {/* Book Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Book Name
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Book Name"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Book Title
                </label>

                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  placeholder="Book Title"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Author */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Author
                </label>

                <input
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  required
                  placeholder="Author"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Price */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Selling Price
                </label>

                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  required
                  placeholder="Selling Price"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Publish Date
                </label>

                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-5">
                <button
                  type="submit"
                  className="rounded-lg bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-black"
                >
                  {editingId ? "Update Book" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:block">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Book Name
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Book Title
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Author
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Selling Price
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Publish Date
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {books.map((book) => (
                  <tr key={book.id} className="transition hover:bg-gray-50">
                    <td className="px-6 py-5 font-semibold text-gray-800">
                      {book.name}
                    </td>

                    <td className="max-w-xs px-6 py-5 text-sm text-gray-600">
                      {book.title}
                    </td>

                    <td className="px-6 py-5 text-gray-700">{book.author}</td>

                    <td className="px-6 py-5 font-semibold text-gray-800">
                      {book.price}
                    </td>

                    <td className="px-6 py-5 text-gray-600">{book.date}</td>

                    <td className="px-6 py-5">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDelete(book.id)}
                          className="rounded-lg bg-red-50 p-2.5 text-red-600 transition hover:bg-red-100"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>

                        <button
                          onClick={() => handleEdit(book)}
                          className="rounded-lg bg-green-50 p-2.5 text-green-600 transition hover:bg-green-100"
                          title="Edit"
                        >
                          <Pencil size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile / Tablet Cards */}
        <div className="space-y-4 lg:hidden">
          {books.map((book) => (
            <div
              key={book.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-gray-900">{book.name}</h3>

                  <p className="mt-1 text-sm text-gray-500">{book.title}</p>
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => handleEdit(book)}
                    className="rounded-lg bg-green-50 p-2 text-green-600"
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    onClick={() => handleDelete(book.id)}
                    className="rounded-lg bg-red-50 p-2 text-red-600"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs text-gray-400">Author</p>

                  <p className="mt-1 text-sm font-medium text-gray-700">
                    {book.author}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Price</p>

                  <p className="mt-1 text-sm font-bold text-indigo-600">
                    {book.price}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Publish Date</p>

                  <p className="mt-1 text-sm font-medium text-gray-700">
                    {book.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;

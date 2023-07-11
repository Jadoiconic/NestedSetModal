import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import {
  MdDelete,
  MdOutlineEdit,
  MdAddToPhotos,
  MdOutlineSave,
} from "react-icons/md";

function Category({ category }) {
  const [isEditing, setEditing] = useState(false);
  const [isChilding, setChilding] = useState(false);
  const [name, setName] = useState("");
  const [oldName, setOldName] = useState("");

  useEffect(() => {
    setOldName(category.name);
  },[]);

  const handleSaveCategory = async (parentId) => {
    const payload = `<root><parent_id>${parentId}</parent_id><name>${name}</name></root>`;
    const { data } = await axios.post('http://127.0.0.1:8000/api/category/', payload, {
      headers: { "Content-Type": "application/xml" },
    });
    window.location.reload();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete? ")) {
      await axios.delete('http://127.0.0.1:8000/api/category/' + id);
      window.location.reload();
    }
  };

  const handleUpdate = async (id) => {
    const payload = `<root><name>${oldName}</name></root>`;
    await axios.put('http://127.0.0.1:8000/api/category/' + id, payload, {
      headers: { "Content-Type": "application/xml" },
    });
    window.location.reload();
  };

  return (
    <>
      <div className={`my-0 ${category.parent_id? ' ps-7 border-l ':'p-5 shadow rounded border '} bg-zinc-50`}>
        <h1 className="font-semibold capitalize pt-5 text-sky-500">
          {category.name}
        </h1>
        <span className="text-gray-500">
          {moment(category.created_at).fromNow()}
        </span>

        <div className="flex gap-5">
          <button
            onClick={() => handleDelete(category.id)}
            className="flex items-center text-gray-500  hover:text-red-400 cursor-pointer"
          >
            <MdDelete /> Trash
          </button>
          <button
            onClick={() => {
              setChilding(false);
              setEditing((prevState) => !prevState);
            }}
            className="flex items-center text-gray-500  hover:text-green-400 cursor-pointer"
          >
            <MdOutlineEdit /> Edit
          </button>
          <button
            onClick={() => {
              setChilding((prevState) => !prevState);
              setEditing(false);
            }}
            className="flex items-center text-gray-500  hover:text-sky-400 cursor-pointer"
          >
            <MdAddToPhotos /> Child
          </button>
        </div>

        {/* adding new child form */}
        {isChilding && (
          <>
            <div className="flex">
              <input
                className="border px-4 py-1 block bg-sky-50 border-sky-500"
                type="text"
                value={name}
                placeholder="Enter a child name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <button
                onClick={() => handleSaveCategory(category.id)}
                className="bg-sky-500 text-white capitalize px-3"
              >
                <MdOutlineSave />
              </button>
            </div>
          </>
        )}

        {isEditing && (
          <>
            <div className="flex">
              <input
                className="border px-4 py-1 block bg-sky-50 border-sky-500"
                type="text"
                value={oldName}
                onChange={(e) => {
                  setOldName(e.target.value);
                }}
              />
              <button
                onClick={() => handleUpdate(category.id)}
                className="bg-sky-500 text-white capitalize px-3"
              >
                <MdOutlineSave />
              </button>
            </div>
          </>
        )}

        {/* nest */}
        {category.children ? (
          <>
            {category.children.map((child) => (
              <div key={child.id} className="ps-0">
                <Category category={child} />
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Category;

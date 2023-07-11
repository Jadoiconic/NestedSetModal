import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineSave } from 'react-icons/md';

function RootCategory() {

  const [name, setName] = useState('');


  const saveCategory = async()=> {
    const payload = `<root><name>${name}</name></root>`;
    const { data } = await axios.post('http://127.0.0.1:8000/api/category/', payload, {
      headers: { "Content-Type": "application/xml" },
    });
    window.location.reload();
  }
  return (
    <div>
      <div className="flex justify-center items-center h-[400px]">
              <input
                className="border px-4 py-2 block bg-sky-50 border-sky-500"
                type="text"
                value={name}
                placeholder='Category Name'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <button
                onClick={() => saveCategory()}
                className="bg-sky-500 text-white capitalize px-3 flex py-2 rounded"
              >
                <MdOutlineSave />Save
              </button>
            </div>
    </div>
  )
}

export default RootCategory
import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import axios from "axios";

import { MdWorkspaces } from "react-icons/md";
function HomeScreen() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    retrieveAllCategories();
  }, []);

  async function retrieveAllCategories() {
    const { data } = await axios('http://127.0.0.1:8000/api/category/');
    setCategories(data.category);
    setLoading(false);
  }

  return (
    <div>
      <div className="my-3 p-4 bg-white rounded-md shadow">
        {!isLoading && (
          <h1 className="text-2xl font-bold uppercase block">All categories</h1>
        )}

        {/* categories container */}
        {!categories ? (
          <>
            <MdWorkspaces className="text-7xl mx-auto my-5 text-sky-500 animate-spin" />
            <h1 className="text-3xl font-semibold text-center text-gray-500">
              Please Wait ...
            </h1>
          </>
        ) : (
          <>
            {categories.map((category) => (
              <div key={category.id} className="my-5">
                <Category category={category} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;

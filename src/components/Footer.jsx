import React from 'react'
import { Link } from 'react-router-dom'


function FooterSection() {



  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Column 1</h4>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Link 1</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Link 2</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Link 3</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Column 2</h4>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Link 4</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Link 5</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Link 6</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Column 3</h4>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Link 7</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Link 8</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Link 9</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection
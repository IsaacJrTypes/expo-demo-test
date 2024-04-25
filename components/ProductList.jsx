import { useState } from 'react'
import {Text,View,ScrollView, Image} from 'react-native'
export default function ProductList({ products }) {
  const [index, setIndex] = useState(0)
  const product = products[index]

  const handleNextClick = () => {
    setIndex((prev) => (prev < products.length - 1 ? prev + 1 : prev))
  }
  const handlePrevClick = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <>
      <View>
        <ul>
      <View key={product.id}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={product.imgPath} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="flex justify-between mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name} <span>${product.price}</span>
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
            <div className="flex justify-between">
              <button
                onClick={handlePrevClick}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Previous Item
              </button>
              <div
                className={
                  'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                }
              >
                {index + 1} of {products.length}
              </div>
              <button
                onClick={handleNextClick}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Next Item
              </button>
            </div>
          </div>
        </div>
      </View>
    </ul>
      </View>
    </>
  )
}
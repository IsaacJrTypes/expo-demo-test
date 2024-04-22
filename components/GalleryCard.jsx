import { Text, View, Image, Button } from 'react-native'
import { useState } from 'react'

export default function GalleryCard({ products }) {
  const [index, setIndex] = useState(0)
  const product = products[index]
  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }
  const handleNext = () => {
    setIndex((prev) => (prev < products.length - 1 ? prev + 1 : prev))
  }

  return (
    <>
      <View className="bg-green-500 h-80 flex-1">
        <Image height={'60%'} source={{ uri: product.imgPath }}></Image>
        <Text>{product.description}</Text>
        <View className="flex flex-row bg-slate-900 max-h-60">
          <View>
            <Button title="Prev" onPress={handlePrev} />
          </View>
          <View>
            <Button title="Next" onPress={handleNext} />
          </View>
        </View>
      </View>
    </>
  )
}

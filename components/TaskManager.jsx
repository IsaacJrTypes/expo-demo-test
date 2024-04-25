import { Text, View, TextInput, Pressable } from 'react-native'
import { useState } from 'react'

function Task({ props ,toggleTask}) {
  return (
    <View className="m-4">
      
      <Text className="flex px-5 py-3 text-white border border-gray-200 rounded-lg  bg-gray-800 border-gray-700 text-center">Task: {props.title}</Text>
      <Pressable className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onPress={()=> toggleTask(props.id)}>
        <Text className="text-center">{props.completed ? "Completed": "Not Completed"}</Text>
      </Pressable>
    </View>
  )
}

export default function TaskManager() {
  const [tasks, setTask] = useState([])
  const [id, setID] = useState(0)
  const [text, setText] = useState('')

  const handleClick = () => {
    const obj = { id: id, title: text, completed: false }
    console.log(text)
    
    setTask([...tasks,obj])
    setID((prev) => prev + 1)
    setText('')
  }

  const toggleTask = (id) => {
    const updatedTasks = tasks.map( (obj) => {
      if (obj.id == id) {
        return {...obj,completed:!obj.completed}
      }
      return obj
    })
    setTask(updatedTasks)
  }

  return (
    <View className="" >
      <View className="border-solid flex border-red-600">
        <Text className="text-center">Input Task</Text>
    <View className=" w-60 flex justify-content-center border-solid border-black border-2 bg-green-50 text-black mx-auto my-4">
      
        <TextInput onChangeText={setText} value={text}/>
    </View>
      
      </View>
      <View className="border-solid border-black border-2 bg-green-50 w-40 mx-auto p-2">
        <Pressable  onPress={() => handleClick()} >
            <Text className="text-black text-center">Add Task</Text>
        </Pressable>

      </View>
      <View>
        {tasks.map( (task) => <Task key={task.id} props={task} toggleTask={toggleTask}/>)}
        {/* <Text>{JSON.stringify(tasks,null,2)}</Text> */}
      </View>
    </View>
  )
}

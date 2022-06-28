import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Dimensions,
  ScrollView,
  Keyboard
} from "react-native";
import CreateTaskInput from "../components/CreateTaskInput";
import CustomButton from "../components/CustomButton";
import TaskList from "../components/TaskList";
import GlobalStyles from "../GlobalStyles";
import { Task } from "../model";

type Params ={
  tasks:Task[];
  setTasks:React.Dispatch<React.SetStateAction<Task[]>>;
}

function TasksList({route, navigation}){
  const [taskText, setTaskText] = useState<string>("");
  //const [tasks, setTasks] = useState<Task[]>([]);
  const {tasks, setTasks}:Params = route.params;

  const onPress = () => {
    if (taskText) {
      setTasks([
        ...tasks,
        { id: Date.now(), taskText: taskText, isDone: false },
      ]);
    }
  };
  console.log(tasks);

  return (
    <View style={GlobalStyles.container}>
      <CreateTaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        onPress={onPress}
    />
    <Button title="hide keyboard" onPress={()=>{Keyboard.dismiss()}}/>
    <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,}}/>
    <TaskList tasks={tasks} setTasks={setTasks}/>

        

    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff1",
    alignItems:"stretch"
  },
});

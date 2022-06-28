import React, { createRef, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Task } from "../model";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
type Props = {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskItem: React.FC<Props> = ({ task, tasks, setTasks }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState(task.taskText);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const handleEdit = (id: number) => {
    setTasks(tasks.map((t) => (t.id == id ? { ...t, taskText: editTask } : t)));
    setEdit(!edit);
  };
  const handleDone = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id == id ? { ...t, isDone: !task.isDone } : t))
    );
  };
  return (
    <View key={task.id}>
      {edit ? (
        <TextInput
          style={styles.editBox}
          value={editTask}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setEditTask(e.nativeEvent.text)
          }
        />
      ) : (
        <Text style={styles.text}>
          {task.isDone?<MaterialIcons name="done" size={24} color="black" />:null}
          {task.taskText}
        </Text>
      )}

      <View style={styles.controls}>
        <TouchableOpacity onPress={() => handleDelete(task.id)}>
          <Feather name="delete" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEdit(task.id)}>
          <Feather name="edit-3" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDone(task.id)}>
          <MaterialIcons name="done" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  editBox: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  controls: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
  container: {
    flexDirection: "row",
  },
  text: {
    fontSize: 23,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

export default TaskItem;

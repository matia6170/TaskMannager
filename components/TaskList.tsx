import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Task } from "../model";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList: React.FC<Props> = ({ tasks, setTasks }: Props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} tasks={tasks}setTasks={setTasks} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff1",
    alignItems: "stretch",
  },
});

export default TaskList;

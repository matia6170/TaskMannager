import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React, { useState } from "react";
import DoneList from "./DoneList";
import TasksList from "./TasksList";
import { Task } from "../model";

const Tab = createBottomTabNavigator();
const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <Tab.Navigator
      screenOptions={{
        //tabBarActiveBackgroundColor: "blue",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <Tab.Screen name="Task" component={TasksList} initialParams={{tasks: tasks, setTasks: setTasks}}/>
      <Tab.Screen name="Done" component={DoneList} />
    </Tab.Navigator>
  );
};

export default Home;

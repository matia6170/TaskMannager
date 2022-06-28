import React, { createRef } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
  StyleSheet,
  Button,
} from "react-native";
import CustomButton from "./CustomButton";

type Props = {
  taskText: string;
  setTaskText: React.Dispatch<React.SetStateAction<string>>;
  onPress: Function;
};

const CreateTaskInput: React.FC<Props> = ({ taskText, setTaskText, onPress }: Props) => {
    const inputRef = createRef<TextInput>();

    const clearInput = () => {
        inputRef.current?.clear();
        inputRef.current?.blur();
    }
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
      ref={inputRef}
        style={styles.createTaskInput}
        placeholder={"Create Task"}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          setTaskText(e.nativeEvent.text)
        }
        value={taskText}
      />
      <CustomButton text="Create" onPress={()=>{onPress(); clearInput()}} />
    </View>
  );
};

const styles = StyleSheet.create({
  createTaskInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  button2: {
    backgroundColor: "#f4511e",
    padding: 20,
    borderRadius: 5,
  },
});

export default CreateTaskInput;

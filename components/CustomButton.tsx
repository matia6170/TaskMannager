import React from "react";
import { StyleSheet, TouchableOpacity , Text} from "react-native";

type Props = {
  text: string;
  style?: any;
  onPress: Function;
};

const CustomButton: React.FC<Props> = ({ text, style, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=>onPress()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:0,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#f4511e",
  },
});

export default CustomButton;

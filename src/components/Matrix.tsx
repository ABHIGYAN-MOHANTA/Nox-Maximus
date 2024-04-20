import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Matrix: React.FC = () => {
  const [tasks, setTasks] = useState({
    task1: "",
    task2: "",
    task3: "",
    task4: "",
  });

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("@tasks");
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error loading Tasks from AsyncStorage:", error);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving answers to AsyncStorage:", error);
    }
  };

  const handleChange = (value: string, task: string) => {
    setTasks({ ...tasks, [task]: value });
  };

  return (
    <View style={styles.subcontainer}>
      <View style={styles.row}>
        <View style={styles.quadrant}>
          <View style={[styles.quadrantHeader, { backgroundColor: "#5CA793" }]}>
            <Text style={styles.header}>Important</Text>
            <Text style={styles.header}>Urgent</Text>
            <Text style={styles.quadrantText}>( Do Now )</Text>
          </View>

          <TextInput
            style={styles.textInput}
            placeholderTextColor={"white"}
            placeholder="Prepare presentation for meeting"
            multiline={true}
            value={tasks.task1}
            onChangeText={(value) => handleChange(value, "task1")}
            onBlur={saveTasks}
          />
        </View>
        <View style={styles.quadrant}>
          <View style={[styles.quadrantHeader, { backgroundColor: "#7ED56F" }]}>
            <Text style={styles.header}>Important</Text>
            <Text style={styles.header}>Not Urgent</Text>
            <Text style={styles.quadrantText}>( Do Later )</Text>
          </View>

          <TextInput
            style={styles.textInput}
            placeholderTextColor={"white"}
            placeholder="Schedule dentist appointment"
            multiline={true}
            value={tasks.task2}
            onChangeText={(value) => handleChange(value, "task2")}
            onBlur={saveTasks}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.quadrant}>
          <View style={[styles.quadrantHeader, { backgroundColor: "#449D44" }]}>
            <Text style={styles.header}>Not Important</Text>
            <Text style={styles.header}>Urgent</Text>
            <Text style={styles.quadrantText}>( Delegate )</Text>
          </View>

          <TextInput
            style={styles.textInput}
            placeholderTextColor={"white"}
            placeholder="Ask colleague for help with report"
            multiline={true}
            value={tasks.task3}
            onChangeText={(value) => handleChange(value, "task3")}
            onBlur={saveTasks}
          />
        </View>
        <View style={styles.quadrant}>
          <View style={[styles.quadrantHeader, { backgroundColor: "#72BF44" }]}>
            <Text style={styles.header}>Not Important</Text>
            <Text style={styles.header}>Not Urgent</Text>
            <Text style={styles.quadrantText}>( Don't Do )</Text>
          </View>

          <TextInput
            style={styles.textInput}
            placeholderTextColor={"white"}
            placeholder="Watch TV"
            multiline={true}
            value={tasks.task4}
            onChangeText={(value) => handleChange(value, "task4")}
            onBlur={saveTasks}
          />
        </View>
      </View>
    </View>
  );
};

export default Matrix;

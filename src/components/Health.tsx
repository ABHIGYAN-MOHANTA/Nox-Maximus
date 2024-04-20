import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../styles";

const DailyTracker: React.FC = () => {
  const [workoutCompleted, setWorkoutCompleted] = useState<boolean>(false);
  const [waterCount, setWaterCount] = useState<number>(0);
  const [sleepCompleted, setSleepCompleted] = useState<boolean>(false);
  const [outingCompleted, setOutingCompleted] = useState<boolean>(false);
  const [mindfulnessPracticed, setMindfulnessPracticed] = useState<boolean>(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const workoutStatus = await AsyncStorage.getItem("workoutCompleted");
      const waterCountValue = await AsyncStorage.getItem("waterCount");
      const sleepStatus = await AsyncStorage.getItem("sleepCompleted");
      const outingStatus = await AsyncStorage.getItem("outingCompleted");
      const mindfulnessStatus = await AsyncStorage.getItem("mindfulnessPracticed");

      if (workoutStatus !== null) {
        setWorkoutCompleted(JSON.parse(workoutStatus));
      }
      if (waterCountValue !== null) {
        setWaterCount(parseInt(waterCountValue, 10));
      }
      if (sleepStatus !== null) {
        setSleepCompleted(JSON.parse(sleepStatus));
      }
      if (outingStatus !== null) {
        setOutingCompleted(JSON.parse(outingStatus));
      }
      if (mindfulnessStatus !== null) {
        setMindfulnessPracticed(JSON.parse(mindfulnessStatus));
      }
    } catch (error) {
      console.error("Error loading tasks from AsyncStorage:", error);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem("workoutCompleted", JSON.stringify(workoutCompleted));
      await AsyncStorage.setItem("waterCount", waterCount.toString());
      await AsyncStorage.setItem("sleepCompleted", JSON.stringify(sleepCompleted));
      await AsyncStorage.setItem("outingCompleted", JSON.stringify(outingCompleted));
      await AsyncStorage.setItem("mindfulnessPracticed", JSON.stringify(mindfulnessPracticed));
    } catch (error) {
      console.error("Error saving tasks to AsyncStorage:", error);
    }
  };

  const handleToggleWorkout = () => {
    setWorkoutCompleted(!workoutCompleted);
  };

  const handleIncrementWater = () => {
    setWaterCount(waterCount + 1);
  };

  const handleDecrementWater = () => {
    if (waterCount > 0) {
      setWaterCount(waterCount - 1);
    }
  };

  const handleToggleSleep = () => {
    setSleepCompleted(!sleepCompleted);
  };

  const handleToggleOuting = () => {
    setOutingCompleted(!outingCompleted);
  };

  const handleToggleMindfulness = () => {
    setMindfulnessPracticed(!mindfulnessPracticed);
  };

  const handleResetTasks = () => {
    setWorkoutCompleted(false);
    setWaterCount(0);
    setSleepCompleted(false);
    setOutingCompleted(false);
    setMindfulnessPracticed(false);
  };

  const renderTaskItem = (label: string, completed: boolean, onPress: () => void) => (
    <TouchableOpacity onPress={onPress} style={styles.taskItem}>
      <Text style={styles.taskLabel}>{label}</Text>
      <Text style={[styles.taskStatus, { color: completed ? "green" : "red" }]}>{completed ? "Yes" : "No"}</Text>
    </TouchableOpacity>
  );

  const renderWaterCounter = () => (
    <View style={styles.waterCounter}>
      <TouchableOpacity onPress={handleDecrementWater} style={styles.counterButton}>
        <Text style={styles.counterButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>{waterCount} glasses water</Text>
      <TouchableOpacity onPress={handleIncrementWater} style={[styles.counterButton, {backgroundColor: "green"}]}>
        <Text style={styles.counterButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, {paddingHorizontal: 20}]}>
      {renderTaskItem("Did I workout today?", workoutCompleted, handleToggleWorkout)}
      {renderWaterCounter()}
      {renderTaskItem("Slept 8 hours?", sleepCompleted, handleToggleSleep)}
      {renderTaskItem("Did an outing today?", outingCompleted, handleToggleOuting)}
      {renderTaskItem("Practised mindfulness today?", mindfulnessPracticed, handleToggleMindfulness)}
      <TouchableOpacity onPress={saveTasks} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResetTasks} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Tasks</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailyTracker;

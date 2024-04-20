import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../styles";
import { Calendar } from "react-native-calendars";

const DailyTracker: React.FC = () => {
  const [workoutCompleted, setWorkoutCompleted] = useState<boolean>(false);
  const [waterCount, setWaterCount] = useState<number>(0);
  const [sleepCompleted, setSleepCompleted] = useState<boolean>(false);
  const [outingCompleted, setOutingCompleted] = useState<boolean>(false);
  const [mindfulnessPracticed, setMindfulnessPracticed] =
    useState<boolean>(false);
  const [markedDates, setMarkedDates] = useState<any>({});

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const workoutStatus = await AsyncStorage.getItem("workoutCompleted");
      const waterCountValue = await AsyncStorage.getItem("waterCount");
      const sleepStatus = await AsyncStorage.getItem("sleepCompleted");
      const outingStatus = await AsyncStorage.getItem("outingCompleted");
      const mindfulnessStatus = await AsyncStorage.getItem(
        "mindfulnessPracticed"
      );
      const storedMarkedDates = await AsyncStorage.getItem("markedDates");

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

      if (storedMarkedDates !== null) {
        setMarkedDates(JSON.parse(storedMarkedDates));
      }
    } catch (error) {
      console.error("Error loading tasks from AsyncStorage:", error);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem(
        "workoutCompleted",
        JSON.stringify(workoutCompleted)
      );
      await AsyncStorage.setItem("waterCount", waterCount.toString());
      await AsyncStorage.setItem(
        "sleepCompleted",
        JSON.stringify(sleepCompleted)
      );
      await AsyncStorage.setItem(
        "outingCompleted",
        JSON.stringify(outingCompleted)
      );
      await AsyncStorage.setItem(
        "mindfulnessPracticed",
        JSON.stringify(mindfulnessPracticed)
      );

      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0];

      // Mark today's date on the calendar
      setMarkedDates({
        ...markedDates,
        [formattedDate]: { selected: true, marked: true },
      });

      // Save marked dates to AsyncStorage
      await AsyncStorage.setItem(
        "markedDates",
        JSON.stringify({
          ...markedDates,
          [formattedDate]: { selected: true, marked: true },
        })
      );
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

  const renderTaskItem = (
    label: string,
    completed: boolean,
    onPress: () => void
  ) => (
    <TouchableOpacity onPress={onPress} style={styles.taskItem}>
      <Text style={styles.taskLabel}>{label}</Text>
      <Text style={[styles.taskStatus, { color: completed ? "green" : "red" }]}>
        {completed ? "Yes" : "No"}
      </Text>
    </TouchableOpacity>
  );

  const renderWaterCounter = () => (
    <View style={styles.waterCounter}>
      <TouchableOpacity
        onPress={handleDecrementWater}
        style={styles.counterButton}
      >
        <Text style={styles.counterButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>{waterCount} glasses water</Text>
      <TouchableOpacity
        onPress={handleIncrementWater}
        style={[styles.counterButton, { backgroundColor: "green" }]}
      >
        <Text style={styles.counterButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={[styles.container, { paddingHorizontal: 20 }]}>
      {renderTaskItem(
        "Did I workout today?",
        workoutCompleted,
        handleToggleWorkout
      )}
      {renderWaterCounter()}
      {renderTaskItem("Slept 8 hours?", sleepCompleted, handleToggleSleep)}
      {renderTaskItem(
        "Did an outing today?",
        outingCompleted,
        handleToggleOuting
      )}
      {renderTaskItem(
        "Practised mindfulness today?",
        mindfulnessPracticed,
        handleToggleMindfulness
      )}
      <TouchableOpacity onPress={saveTasks} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResetTasks} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Tasks</Text>
      </TouchableOpacity>
    
        <Calendar
          markedDates={markedDates}
          theme={{
            backgroundColor: "#000000",
            calendarBackground: "#000000",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e",
          }}
        />

    </ScrollView>
  );
};

export default DailyTracker;

import { StatusBar } from "expo-status-bar";
import { Text, View, Modal, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Matrix from "./src/components/Matrix";
import HealthTracker from "./src/components/Health";
import { FontAwesome6 } from "@expo/vector-icons";
import * as SplashScreen from 'expo-splash-screen';

const App: React.FC = () => {
  const [showHealthModal, setShowHealthModal] = useState(false);

  useEffect(() => {
    async function prepare() {
      // Prevent the native splash screen from autohiding before App component renders
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  let [fontsLoaded] = useFonts({
    Megloria: require("./fonts/MEGLORIA.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Notify the native splash screen that loading has finished
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const toggleHealthModal = () => {
    setShowHealthModal(!showHealthModal);
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        {/* Use a loading indicator while fonts are loading */}
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topBar}>
        <Text style={styles.topBarText}>~"Nox Maximus"~</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>~"Learn"~"Build"~"Inspire"~</Text>
          <TouchableOpacity
            onPress={toggleHealthModal}
            style={{ position: "absolute", right: -100, top: -20 }}
          >
            <FontAwesome6 name="door-open" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.subcontainer}>
        <Matrix />
        {/* <HealthTracker /> */}
      </View>

      <Modal visible={showHealthModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>~"Nox Maximus"~</Text>
            <View
              style={{ flexDirection: "row"}}
            >
              <Text style={styles.text}>~"Learn"~"Build"~"Inspire"~</Text>
              <TouchableOpacity
                onPress={toggleHealthModal}
                style={{ position: "absolute", right: -100, top: -20 }}
              >
                <FontAwesome6 name="door-open" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <HealthTracker />
        </View>
      </Modal>
    </View>
  );
};

export default App;

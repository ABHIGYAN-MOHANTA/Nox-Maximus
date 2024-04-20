import { StatusBar } from "expo-status-bar";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import styles from "./styles";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";
import Matrix from "./src/components/Matrix";
import HealthTracker from "./src/components/Health";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const fetchFonts = () => {
  return Font.loadAsync({
    Megloria: require("./fonts/MEGLORIA.ttf"),
  });
};

const App: React.FC = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showHealthModal, setShowHealthModal] = useState(false);

  const toggleHealthModal = () => {
    setShowHealthModal(!showHealthModal);
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error: any) => console.error(error)}
      />
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
            style={{ position: "absolute", right: -100, top: -40 }}
          >
            <FontAwesome6 name="door-open" size={24} color="white" />
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
                style={{ position: "absolute", right: -100, top: -40 }}
              >
                <FontAwesome6 name="door-open" size={24} color="white" />
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

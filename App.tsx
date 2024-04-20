import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styles";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";
import Matrix from "./src/components/Matrix";

const fetchFonts = () => {
  return Font.loadAsync({
    Megloria: require("./fonts/MEGLORIA.ttf"),
  });
};

const App: React.FC = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

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
        <Text style={styles.text}>~"Learn"~"Build"~"Inspire"~</Text>
      </View>

      <View style={styles.subcontainer}>
        <Matrix />
      </View>
    </View>
  );
};

export default App;

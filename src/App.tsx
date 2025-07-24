import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./presentation/navigations/StackNavigator";
import { StatusBar, useColorScheme } from "react-native";
import { PermissionsChecker } from "./presentation/providers/PermissionsChecker";
function App() {
  const schema = useColorScheme();
  return (
    <>
      <StatusBar barStyle={schema === 'dark' ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <PermissionsChecker>
          <StackNavigator />
        </PermissionsChecker>
      </NavigationContainer>
    </>
  );
}

export default App;

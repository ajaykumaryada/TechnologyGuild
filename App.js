import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import GuildMain from "./src/screens/GuildMain";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Guild: GuildMain
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Technology Guild"
    }
  }
);

export default createAppContainer(navigator);

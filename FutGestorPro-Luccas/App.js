import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetalhesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Elenco"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
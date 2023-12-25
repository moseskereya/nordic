import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import { useAuth } from '../Context/AuthContext ';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    const {user} = useAuth()
  return (
    <NavigationContainer>
        {
            user? (
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
                </Stack.Navigator>
            ) : (
             <Stack.Navigator initialRouteName='Welcome'>
                   <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}} />
                   <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
                   <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
            </Stack.Navigator>
            )
        }
    </NavigationContainer>
  );
}

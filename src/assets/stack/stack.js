import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/login/login';
 
import { SCREEN } from '../enum/screens';

const Stack = createStackNavigator();

const AuthStack=()=> {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name={SCREEN.LOGIN} component={Login} />
    
    </Stack.Navigator>
  );
}
export default AuthStack
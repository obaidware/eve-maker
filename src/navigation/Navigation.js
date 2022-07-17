import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Events from '../screens/Events';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Register from '../screens/Register';
import Booking from '../screens/Booking';


const Stack = createNativeStackNavigator();


function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home' >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
    );
}

export default MyStack;
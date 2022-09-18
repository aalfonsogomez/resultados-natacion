import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/index.jsx';

export default function App() {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
  );
}


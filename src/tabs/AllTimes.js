import { Text, View } from 'react-native';
import useAllTimes from '../hooks/useAllTimes';

export default function Feed() {
    const { allTimes } = useAllTimes();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Probando!!</Text>
        </View>
    );
}

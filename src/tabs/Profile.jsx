import { Text, View, StyleSheet } from 'react-native';
import { Card, Image } from '@rneui/themed';
import constants from '../data/api.js';


export default function Profile() {
    const { SWIMMER, CLUB } = constants;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Card>
                <Card.Title style={styles.name}>{SWIMMER.name} {SWIMMER.last_name}</Card.Title>
                <Card.Divider />
                <View style={styles.user}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: CLUB.url }}
                    />
                    <Text style={styles.club}>{CLUB.name}</Text>
                </View>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{ uri: SWIMMER.url }}
                />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    club: {
        lineHeight: 50,
        fontSize: 18,
    }
});
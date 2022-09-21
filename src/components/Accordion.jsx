import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ListItem } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import swim from '../data/swim';
import formatDate from '../utils/formatDate';
import formatValue from '../utils/formatValue';

export default function Accordion(props) {
    const [expanded, setExpanded] = useState(false);
    const { date, value } = props.data[0];
    const { NAME_TESTS } = swim;
    return (
        <ListItem.Accordion
            key={props.index}
            content={
                <View style={styles.container}>
                    <MaterialCommunityIcons name="swim" size={22} />
                    <Text style={styles.test}>{NAME_TESTS[props.item]}</Text>
                    <Text style={styles.date}>{formatDate(date)}</Text>
                    <Text style={styles.value}>{formatValue(value)} </Text>
                </View>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
        >
            {props.data.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{l.competition_name}</ListItem.Title>
                        <ListItem.Subtitle>{formatDate(l.date)}</ListItem.Subtitle>
                        <Text>{formatValue(l.value)}</Text>
                    </ListItem.Content>
                </ListItem>
            ))}
        </ListItem.Accordion>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        background: '#fff'
    },
    test: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'blue'
    },
    date: {
        fontSize: 16,

    },
    value: {
        fontSize: 16,
    }
});
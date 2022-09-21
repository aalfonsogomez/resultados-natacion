import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ListItem } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import swim from '../data/swim';
import formatDate from '../utils/formatDate';
import formatValue from '../utils/formatValue';

export default function Competitions(props) {
    const [expanded, setExpanded] = useState(false);
    const { NAME_TESTS } = swim;
    console.log({props});
    return (
        <ListItem.Accordion
            key={props.index}
            content={
                <View style={styles.container}>
                    <Text>{props.item}</Text>
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
                        <ListItem.Title>{NAME_TESTS[l.test]}</ListItem.Title>
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
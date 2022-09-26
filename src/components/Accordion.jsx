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
                        <ListItem.Title style={styles.competition}>{l.competition_name}</ListItem.Title>
                        <View style={styles.container}>
                            <Text style={styles.competitionDate}>{formatDate(l.date)}</Text>
                            <Text style={styles.competitionValue}>{formatValue(l.value)}</Text>
                        </View>
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
        justifyContent: 'space-between'
    },
    test: {
        fontWeight: 'bold',
        width: '38%',
        fontSize: 16,
        color: 'blue',
        marginLeft: 10
    },
    date: {
        width: '35%',
        fontSize: 15
    },
    value: {
        fontWeight: 'bold',
        width: '25%',
        fontSize: 15,
        textAlign: 'right',
        paddingRight: 10
    },
    competition: {
        fontWeight: 'bold',
        fontSize: 16
    },
    competitionDate: {
        width: '50%',
        fontSize: 16

    },
    competitionValue: {
        width: '50%',
        fontSize: 16,
        textAlign: 'center'
    }
});
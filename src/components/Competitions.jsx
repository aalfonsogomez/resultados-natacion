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
    const { competition_name } = props?.data[0];
    return (
        <ListItem.Accordion
            key={props.index}
            content={
                <View style={styles.containerCompetition}>
                    <MaterialCommunityIcons name="map-marker" size={22} />
                    <Text style={styles.competition}>{competition_name}</Text>
                </View>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
        >
            {props.data.map((l, i) => (
                <View style={styles.container} key={i}>
                    <Text style={styles.test}>{NAME_TESTS[l.test]}</Text>
                    <Text style={styles.date}>{formatDate(l.date)}</Text>
                    <Text style={styles.value}>{formatValue(l.value)}</Text>
                </View>
            ))}
        </ListItem.Accordion>

    )
}

const styles = StyleSheet.create({
    containerCompetition: {
        flex: 1,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10,
    },
    competition: {
        fontWeight: 'bold',
        fontSize: 15
    },
    test: {
        fontWeight: 'bold',
        width: '38%',
        fontSize: 14,
        color: 'blue',
        marginLeft: 20
    },
    date: {
        width: '35%',
        fontSize: 14
    },
    value: {
        fontWeight: 'bold',
        width: '25%',
        fontSize: 14,
        textAlign: 'right',
        paddingRight: 35
    },
});
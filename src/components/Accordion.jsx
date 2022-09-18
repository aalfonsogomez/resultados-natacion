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
                <View>
                    <MaterialCommunityIcons name="swim" />
                    <Text>{NAME_TESTS[props.item]}</Text>
                    <Text>**</Text>
                    <Text>{formatDate(date)}</Text>
                    <Text>**</Text>
                    <Text>{formatValue(value)} </Text>
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
                    </ListItem.Content>
                    <Text>{formatValue(l.value)}</Text>
                    <ListItem.Chevron />
                </ListItem>
            ))}
        </ListItem.Accordion>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
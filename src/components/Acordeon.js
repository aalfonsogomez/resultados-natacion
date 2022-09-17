import { Text } from 'react-native';
import { useState } from 'react';
import { ListItem, Icon } from '@rneui/themed';

export default function Acordeon(props) {
    const [expanded, setExpanded] = useState(false);
    const pruebas = {
        '50-5': '50 Libre',
        '100-5': '100 Libre',
        '200-5': '200 Libre',
        '400-5': '400 Libre',
        '800-5': '800 Libre',
        '50-4': '50 Espalda',
        '100-4': '100 Espalda',
        '200-4': '200 Espalda',
        '400-4': '400 Espalda',
        '800-4': '800 Espalda',
        '50-8': '50 Estilos',
        '100-8': '100 Estilos',
        '200-8': '200 Estilos',
        '400-8': '400 Estilos',
        '800-8': '800 Estilos',
        '50-6': '50 Braza',
        '100-6': '100 Braza',
        '200-6': '200 Braza',
        '400-6': '400 Braza',
        '800-6': '800 Braza',
        '50-7': '50 Mariposa',
        '100-7': '100 Mariposa',
        '200-7': '200 Mariposa',
        '400-7': '400 Mariposa',
        '800-7': '800 Mariposa',
    }
    console.log(props.data)
    const { date, value } = props.data[0];
    return (
        <ListItem.Accordion
            key={props.index}
            content={
                <>
                    <Icon name="place" size={30} />
                    <Text>{pruebas[props.item]}</Text>
                    <Text>{date}</Text>
                    <Text>{value} </Text>
                </>
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
                        <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Text>{l.value}</Text>
                    <ListItem.Chevron />
                </ListItem>
            ))}
        </ListItem.Accordion>

    )
}
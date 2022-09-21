import { ScrollView } from 'react-native';
import Accordion from '../components/Accordion.jsx';
import useAllTimes from '../hooks/useAllTimes';
import theme from '../data/theme.js';

export default function AllTimes() {
    const { allTimes } = useAllTimes();

    const viewAllTimes = allTimes?.data
        .filter((allTime) => allTime.relationships.phaseresult.data === null)
        .reduce((ant, actual) => {
            let fn = actual.attributes.goal + '-' + actual.relationships.style.data.id;
            ant[fn] = !ant[fn]
                ? [{
                    competition_name: actual.attributes.competition_name,
                    date: actual.attributes.date,
                    value: actual.attributes.value
                }]
                : [
                    ...ant[fn],
                    {
                        date: actual.attributes.date,
                        competition_name: actual.attributes.competition_name,
                        value: actual.attributes.value
                    }
                ];
            return ant;
        }, {});

    return (
        <ScrollView>
            {theme.order.map((item, index) => {
                if (viewAllTimes && viewAllTimes[item]) return <Accordion key={index} data={viewAllTimes[item]} item={item} index={index}></Accordion>
            })}
        </ScrollView>
    );


}

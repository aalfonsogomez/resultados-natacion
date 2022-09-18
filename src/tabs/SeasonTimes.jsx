import { ScrollView } from 'react-native';
import Accordion from '../components/Accordion.jsx';
import useSeasonTimes from '../hooks/useSeasonTime.js';
import theme from '../data/theme.js';

export default function SeasonTimes() {
    const { seasonTimes } = useSeasonTimes();
    const viewSeasonTimes = seasonTimes?.data
        .filter((seasonTime) => seasonTime.relationships.phaseresult.data === null)
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
                if (viewSeasonTimes && viewSeasonTimes[item]) return <Accordion key={index} data={viewSeasonTimes[item]} item={item} index={index}></Accordion>
            })}
        </ScrollView>
    );
}

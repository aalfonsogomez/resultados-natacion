import { ScrollView, View, Text } from 'react-native';
import Competitions from '../components/Competitions.jsx';
import useAllTimesByDate from '../hooks/useAllTimesByDate.js';

export default function AllTimesByCompetition() {
    const { allTimesByDate } = useAllTimesByDate();

    const viewAllTimesByCompetition = allTimesByDate?.data
        .filter((allTimeByDate) => allTimeByDate.relationships.phaseresult.data === null)
        .reduce((ant, actual) => {
            let competition_name = actual.attributes.competition_name;
            ant[competition_name] = !ant[competition_name]
                ? [{
                    date: actual.attributes.date,
                    value: actual.attributes.value,
                    test: actual.attributes.goal + '-' + actual.relationships.style.data.id
                }]
                : [
                    ...ant[competition_name],
                    {
                        date: actual.attributes.date,
                        value: actual.attributes.value,
                        test: actual.attributes.goal + '-' + actual.relationships.style.data.id
                    }
                ];
            return ant;
        }, {});
    console.log(viewAllTimesByCompetition)
    if (viewAllTimesByCompetition) {
        let x = 0;
        Object.keys(viewAllTimesByCompetition).map((key) => {
            console.log(x++)    
            console.log(key);
            console.log(viewAllTimesByCompetition[key]);
        });
    }
    return (
        <ScrollView>
            {viewAllTimesByCompetition && Object.keys(viewAllTimesByCompetition).map((item, index) => {
                return <Competitions key={index} data={viewAllTimesByCompetition[item]} item={item} index={index}></Competitions>
            })}
        </ScrollView>
    );


}

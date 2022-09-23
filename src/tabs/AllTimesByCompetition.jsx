import { ScrollView } from 'react-native';
import Competitions from '../components/Competitions.jsx';
import useAllTimesByDate from '../hooks/useAllTimesByDate.js';

export default function AllTimesByCompetition() {
    const { allTimesByDate } = useAllTimesByDate();
    const viewAllTimesByCompetition = allTimesByDate?.data
        .filter((allTimeByDate) => allTimeByDate.relationships.phaseresult.data === null)
        .reduce((ant, actual) => {
            let idCompetitionName = actual.attributes.competition_name + '-' + actual.relationships.competition.data?.id;
            ant[idCompetitionName] = !ant[idCompetitionName]
                ? [{
                    competition_name: actual.attributes.competition_name,
                    date: actual.attributes.date,
                    value: actual.attributes.value,
                    test: actual.attributes.goal + '-' + actual.relationships.style.data.id
                }]
                : [
                    ...ant[idCompetitionName],
                    {
                        competition_name: actual.attributes.competition_name,
                        date: actual.attributes.date,
                        value: actual.attributes.value,
                        test: actual.attributes.goal + '-' + actual.relationships.style.data.id
                    }
                ];
            return ant;
        }, {});

    return (
        <ScrollView>
            {viewAllTimesByCompetition && Object.keys(viewAllTimesByCompetition).map((item, index) => {
                return <Competitions key={index} data={viewAllTimesByCompetition[item]} item={item} index={index}></Competitions>
            })}
        </ScrollView>
    );


}

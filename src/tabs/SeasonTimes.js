import { View } from 'react-native';
import Acordeon from '../components/Acordeon';
import useSeasonTimes from '../hooks/useSeasonTime';

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

    const listOrder = ['50-5', '100-5', '200-5', '400-5', '800-5', '50-4', '100-4', '200-4', '400-4', '800-4', '50-8', '100-8', '200-8', '400-8', '800-8', '50-6', '100-6', '200-6', '400-6', '800-6', '50-7', '100-7', '200-7', '400-7', '800-7'];
    return (
        <View>
            {listOrder.map((item, index) => {
                if (viewSeasonTimes && viewSeasonTimes[item]) return <Acordeon data={viewSeasonTimes[item]} item={item} index={index}></Acordeon>
            })}
        </View>
    );
}

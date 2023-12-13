import { get } from 'lodash-es'
import { ICovidData } from 'ts/interfaces/covidData.interfaces'

type dataObject = any[] | any

export function TransformCurrentAndHistoricData(data: dataObject) {
    const updateCurrentAndHistoricObject: ICovidData[] = data.map((item: any[]) => {
        
        return {
            date: get(item, 'date'),
            casesTotal: get(item, 'cases.total.value'),
            testingTotal: get(item, 'testing.total.value'),
            deathTotal: get(item, 'outcomes.death.total.value'),
            hospitalizedCurrently: get(item, 'outcomes.hospitalized.currently.value')
        }
    })
    return { updateCurrentAndHistoricObject }
}



import { get } from 'lodash-es'
import { ICovidData } from 'ts/interfaces/covidData.interfaces'

type dataObject = any[] | any

export function TransformGeographicData(data: dataObject) {
    const updateGeographicObject: ICovidData[] = data.map((item: any[]) => {
        
        return {
            date: get(item, 'date'),
            state: get(item, 'state'),
            casesTotal: get(item, 'total'),
            testingTotal: get(item, 'totalTestResults'),
            deathTotal: get(item, 'death'),
            hospitalizedCurrently: get(item, 'hospitalized'),
          
        }
    })
    return { updateGeographicObject }
}



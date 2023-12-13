import { useQuery } from '@tanstack/react-query'
import { getDailyDataRes } from '@services/index'
import { ICovidData } from 'ts/interfaces/covidData.interfaces'
import { get } from 'lodash-es'

const useGetDailyData = () => {
    const { data, error, isLoading } = useQuery<ICovidData, Error>({
        queryKey: ["dailyData"], queryFn: () => getDailyDataRes(),
    })

    const getAllData = get(data, 'data', [])

    return { getAllData, error, isLoading, data }

}

export default useGetDailyData
import { useQuery } from '@tanstack/react-query'
import { getAllStatesDataRes } from '@services/index'
import { ICovidData } from 'ts/interfaces/covidData.interfaces'

const useGetAllStatesData = () => {
    const { data, error, isLoading } = useQuery<ICovidData, Error>({
        queryKey: ["allStatesData"], queryFn: () => getAllStatesDataRes(),
    })


    return { data, error, isLoading }

}

export default useGetAllStatesData
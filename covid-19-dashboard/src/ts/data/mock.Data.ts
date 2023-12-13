import { ICovidData } from 'ts/interfaces/covidData.interfaces'
export const Mock_Hostoric_Data: ICovidData[] =
   [{
      state: 'CA',
      date: '2021-03-07',
      casesTotal: 28756489,
      testingTotal: 363825123,
      deathTotal: 515151,
      hospitalizedCurrently: 40199
   },
   {
      state: 'MD',
      date: '2021-03-06',
      casesTotal: 28714654,
      testingTotal: 362655064,
      deathTotal: 514309,
      hospitalizedCurrently: 41401
   }
   ]
export const Mock_Response_Historic_Data = {

   data: [
      {
         date: "2021-03-07",
         states: 56,
         cases: {
            total: {
               value: 28756489,
               calculated: {
                  population_percent: 8.6932,
                  change_from_prior_day: 41835,
                  seven_day_change_percent: 1.4
               }
            }
         },
         testing: {
            total: {
               value: 363825123,
               calculated: {
                  "population_percent": 109.9858,
                  "change_from_prior_day": 1170059,
                  "seven_day_change_percent": 2.8
               }
            }
         },
         outcomes: {
            hospitalized: {
               currently: {
                  value: 40199,
                  calculated: {
                     "population_percent": 0.0122,
                     "change_from_prior_day": -1202,
                     "seven_day_change_percent": -15.1,
                     "seven_day_average": 43843
                  }
               },
               in_icu: {
                  currently: {
                     value: 8134,
                     calculated: {
                        population_percent: 0.0025,
                        change_from_prior_day: -275,
                        seven_day_change_percent: -17,
                        seven_day_average: 8938
                     }
                  }
               },
               on_ventilator: {
                  currently: {
                     value: 2802,
                     calculated: {
                        population_percent: 0.0008,
                        change_from_prior_day: -9,
                        seven_day_change_percent: -13.7,
                        seven_day_average: 2987
                     }
                  }
               }
            },
            death: {
               total: {
                  value: 515151,
                  calculated: {
                     population_percent: 0.1557,
                     change_from_prior_day: 842,
                     seven_day_change_percent: 2.4,
                     seven_day_average: 510267
                  }
               }
            }
         }
      }]

}
import { ViewType } from "ts/enums/viewTypes.enum";
import { PanelType } from "ts/enums/panelTypes.enums";

export interface ICovidData {
    date: string;
    state: string;
    casesTotal: number;
    testingTotal: number;
    deathTotal: number;
    hospitalizedCurrently: number;
}


export type CovidDataContextType = {
    covidData: ICovidData[];
    saveRows: (covidData: ICovidData[]) => void
    getRows: () => void,
    viewType:ViewType,
    dateSelected: string | null
    stateSelected: string | '',
    panelType: PanelType | boolean,
    setFilterSelectedDate: (date: string | null) => void
    setFilterSelectedState: (state: string | '') => void
    setSelectedViewType: (viewType: ViewType) => void
    setSelectedPanelType: (panelType: PanelType | false) => void
}
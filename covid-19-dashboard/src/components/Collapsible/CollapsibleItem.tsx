import React, { FC, useContext } from 'react'
import { PanelType } from '../../ts/enums/panelTypes.enums'
import { CovidDataContextType } from 'ts/interfaces/covidData.interfaces'
import { CovidDataContext } from '@context/covidDataContext'
import { Accordion, AccordionSummary, AccordionDetails } from './styles'

interface CollapsibleItemProps {
    className?: string,
    children: React.ReactNode,
}

const CollapsibleItem: FC<CollapsibleItemProps> = ({ children }): JSX.Element => {
    const { setSelectedPanelType, saveRows } = useContext(CovidDataContext) as CovidDataContextType

    const [expanded, setExpanded] = React.useState<string | false>(PanelType.allData);

    const handleChange =
        (panel: PanelType) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            event.preventDefault()
            setExpanded(newExpanded ? panel : false);
            setSelectedPanelType(newExpanded ? panel : false)
            saveRows([])
        };

    return (
        <div>
            <Accordion expanded={expanded === PanelType.allData} onChange={handleChange(PanelType.allData)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <p>Current and Historical Data</p>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === PanelType.allStates} onChange={handleChange(PanelType.allStates)}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <p>States Current and Historical Data</p>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CollapsibleItem
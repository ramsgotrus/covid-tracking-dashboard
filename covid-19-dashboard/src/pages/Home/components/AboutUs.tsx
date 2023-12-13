
import { FC } from 'react'

interface AboutUsProps {
    className?: any
}

const AboutUs: FC<AboutUsProps> = (): JSX.Element => {

    return (
        <div>
            <p style={{ fontSize: '30px' }}>Welcome to Covid-19 Dashboard.</p>
            <p style={{ fontSize: '15px' }}>
                This platforms offer comprehensive data and visualizations to help you track the impact of COVID-19 globally and in specific regions. The data presented on this dashboard is sourced from The COVID Tracking Project At The Atlantic.
            </p>
            <p style={{ marginTop: '50px' }}>
                Trends in hospital admissions, death, tests for COVID-19, nationally and by state.
            </p>
        </div>

    )
}

export default AboutUs
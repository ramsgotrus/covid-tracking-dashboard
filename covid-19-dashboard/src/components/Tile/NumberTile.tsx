import { FC } from 'react'
import './styles.css'

interface NumberTitleProps {
    label: string,
    value: number
}

const NumberTile: FC<NumberTitleProps> = ({ label, value }): JSX.Element => {

    return (<div className='tileContainer'>
        <p>
            <strong>
                {label}
            </strong>
        </p>
        <p>{value.toLocaleString()}</p>
    </div>)


}

export default NumberTile
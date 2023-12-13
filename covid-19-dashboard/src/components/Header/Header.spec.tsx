import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-utils'
import { Router } from 'react-router-dom'
import Header from './Header'

const titleText = 'Covid-19-Dashboard'
const subTitleText = 'Home'
const RenderHeader = () => {
    return (
        <Router location={{}} navigator={navigator}>
            <Header title={titleText} >Header Test</Header>
        </Router>
    )
}

test('render header component', () => {
    render(RenderHeader())
    expect(screen.getByText(titleText)).toBeInTheDocument()
    expect(screen.getByText(subTitleText)).toBeInTheDocument()
})

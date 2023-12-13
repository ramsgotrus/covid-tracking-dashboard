import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-utils'
import Footer from './Footer'

const titleText = 'Ram@2023'
test('render footer component', () => {
    render(<Footer title={titleText}>Hello</Footer>)
    expect(screen.getByText(titleText)).toBeInTheDocument()
});

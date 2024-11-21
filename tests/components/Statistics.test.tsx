import { render, screen } from '@testing-library/react';
import Statistics from '../../components/FloorPlan/Statistics';
import { FloorProvider } from '../../context/FloorContext';

test('renders Statistics with default values', () => {
    render(
        <FloorProvider>
            <Statistics />
        </FloorProvider>
    );

    expect(screen.getByText(/Total Tables:/)).toBeInTheDocument();
    expect(screen.getByText(/Min Covers:/)).toBeInTheDocument();
    expect(screen.getByText(/Max Covers:/)).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import FloorPlan from '../../components/FloorPlan/FloorPlan';
import { FloorProvider } from '../../context/FloorContext';

test('renders FloorPlan without crashing', () => {
    render(
        <FloorProvider>
            <FloorPlan />
        </FloorProvider>
    );

    const floorPlan = screen.getByRole('region');
    expect(floorPlan).toBeInTheDocument();
});

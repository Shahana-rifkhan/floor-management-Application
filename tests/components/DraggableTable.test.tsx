import { render } from '@testing-library/react';
import DraggableTable from '../../components/FloorPlan/DraggableTable';

test('renders DraggableTable with given table data', () => {
    const table = { id: '1', name: 'Table 1', position: { x: 0, y: 0 }, minCovers: 2, maxCovers: 4 };

    const { getByText } = render(<DraggableTable table={table} />);
    expect(getByText('Table 1')).toBeInTheDocument();
});

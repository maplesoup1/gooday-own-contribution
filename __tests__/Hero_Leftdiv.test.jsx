import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Leftdiv from '@/components/home/hero/Leftdiv';

describe('Leftdiv component', () => {
    it('should render logo image', () => {
        render(<Leftdiv />);
        const logoImage = screen.getByAltText('logo');
        expect(logoImage).toBeInTheDocument();
    });

    it('should render Get started button', () => {
        render(<Leftdiv />);
        const button = screen.getByRole('button', { name: /get started/i });
        expect(button).toBeInTheDocument();
    });
});

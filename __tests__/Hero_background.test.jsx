import { screen } from '@testing-library/dom';
import "@testing-library/jest-dom";
import { describe } from 'node:test';
import Background from '@/components/home/hero/Background';
import { render } from '@testing-library/react';

describe('Rendering', () => {
    it('Should render background image', () => {
        render(<Background />);
        expect(screen.getByTestId("background-img")).toBeInTheDocument();
    });
});

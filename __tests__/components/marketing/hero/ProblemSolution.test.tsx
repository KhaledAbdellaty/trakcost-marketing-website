import { render, screen } from '@testing-library/react';
import { ProblemSolution } from '@/components/marketing/hero/ProblemSolution';

describe('ProblemSolution Compound Component', () => {
  it('renders problem and solution clearly', () => {
    render(
      <ProblemSolution.Root>
        <ProblemSolution.Problem title="The Problem">
          Everything is messy.
        </ProblemSolution.Problem>
        <ProblemSolution.Arrow />
        <ProblemSolution.Solution title="The Solution">
          Everything is organized.
        </ProblemSolution.Solution>
      </ProblemSolution.Root>
    );

    expect(screen.getByText('The Problem')).toBeInTheDocument();
    expect(screen.getByText('Everything is messy.')).toBeInTheDocument();
    expect(screen.getByText('The Solution')).toBeInTheDocument();
    expect(screen.getByText('Everything is organized.')).toBeInTheDocument();
  });
});

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, prettyDOM, render, screen } from '@testing-library/react';
import LoginForm from '../LoginForm';

describe('Login Form', () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it('should match the snapshot', () => {
    cleanup();
    const { asFragment } = render(<LoginForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the login form', async () => {
    expect(
      screen.getByRole('textbox', {
        name: /email/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /create an account/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /forgot password/i})).toBeInTheDocument();
  });
});

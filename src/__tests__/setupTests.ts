import '@testing-library/jest-dom';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

beforeAll(() => {});

afterAll(() => {});

afterEach(() => {
  cleanup();
});

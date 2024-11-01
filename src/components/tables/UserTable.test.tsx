// src/components/UserTable/UserTable.test.tsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserTable from './UserTable'; // Import the component to be tested
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom';

// Create a mock for axios
const mock = new MockAdapter(axios);

describe('UserTable Component', () => {
  beforeEach(() => {
    mock.reset(); // Reset any previous mock calls before each test
  });

  // Positive Scenarios
  describe('Positive Scenarios', () => {
    test('renders without crashing', () => {
      render(<UserTable />);
      expect(screen.getByText('ORGANIZATION')).toBeInTheDocument();
    });

    test('displays users correctly when fetched', async () => {
      const users = [
        {
          organization: 'Org1',
          username: 'user1',
          email: 'user1@example.com',
          phone: '1234567890',
          dateJoined: '2024-01-01',
          status: 'Active',
        },
        {
          organization: 'Org2',
          username: 'user2',
          email: 'user2@example.com',
          phone: '0987654321',
          dateJoined: '2024-02-01',
          status: 'Inactive',
        },
      ];

      mock
        .onGet('https://run.mocky.io/v3/52445517-855e-4e0b-9617-db64e30e331e')
        .reply(200, users);

      render(<UserTable />);

      await waitFor(() => {
        expect(screen.getByText('user1')).toBeInTheDocument();
        expect(screen.getByText('user2')).toBeInTheDocument();
      });
    });

    test('pagination changes current page', async () => {
      const users = Array.from({ length: 25 }, (_, i) => ({
        organization: `Org${i + 1}`,
        username: `user${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: `12345678${i}`,
        dateJoined: '2024-01-01',
        status: 'Active',
      }));

      mock
        .onGet('https://run.mocky.io/v3/52445517-855e-4e0b-9617-db64e30e331e')
        .reply(200, users);

      render(<UserTable />);

      await waitFor(() => {
        expect(screen.getByText('user1')).toBeInTheDocument();
      });

      // Simulate clicking on the pagination button
      fireEvent.click(screen.getByText('Next')); // Update the text based on your pagination UI

      await waitFor(() => {
        expect(screen.getByText('user11')).toBeInTheDocument();
      });
    });
  });

  // Negative Scenarios
  describe('Negative Scenarios', () => {
    test('handles API error gracefully', async () => {
      mock
        .onGet('https://run.mocky.io/v3/52445517-855e-4e0b-9617-db64e30e331e')
        .reply(500);

      console.error = jest.fn(); // Mock console.error

      render(<UserTable />);

      await waitFor(() => {
        expect(console.error).toHaveBeenCalledWith(
          'Error fetching users:',
          expect.anything()
        );
      });
    });

    test('displays no users message when no users are fetched', async () => {
      mock
        .onGet('https://run.mocky.io/v3/52445517-855e-4e0b-9617-db64e30e331e')
        .reply(200, []);

      render(<UserTable />);

      await waitFor(() => {
        expect(screen.getByText('No users found')).toBeInTheDocument(); // Add this message in your component
      });
    });
  });
});

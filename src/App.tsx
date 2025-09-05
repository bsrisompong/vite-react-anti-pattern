import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { QueryProvider } from '@/app/providers/QueryProvider';
import { RouterProvider } from '@/app/providers/RouterProvider';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryProvider>
        <RouterProvider />
      </QueryProvider>
    </MantineProvider>
  );
}

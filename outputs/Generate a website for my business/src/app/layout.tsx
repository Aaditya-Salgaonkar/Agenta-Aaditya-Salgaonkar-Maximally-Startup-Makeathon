import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { MantineProvider } from '@mantine/core';
import { Navbar, Header, Text, Group, Button, Box, createStyles } from '@mantine/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.hover()]: {
      textDecoration: 'underline',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

function NavLinkComponent({ label, to, ...others }: any) {
  const match = useMatch({ path: useResolvedPath(to).pathname, end: false });
  const { classes, cx } = useStyles();

  return (
    <NavLink
      to={to}
      className={cx(classes.link, { [classes.active]: match })}
      {...others}
    >
      <Text fw={500} fz="sm" transform="capitalize">
        {label}
      </Text>
    </NavLink>
  );
}

export default function Layout() {
  return (
    <ClerkProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Router>
          <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <Header height={60} p="xs">
              <Navbar width={{ base: 300 }} height={60} p="xs">
                <Navbar.Section grow mt="md">
                  <Group position="apart">
                    <NavLinkComponent to="/dashboard" label="Dashboard" />
                    <NavLinkComponent to="/projects" label="Projects" />
                    <NavLinkComponent to="/billing" label="Billing" />
                    <NavLinkComponent to="/analytics" label="Analytics" />
                    <NavLinkComponent to="/settings" label="Settings" />
                  </Group>
                </Navbar.Section>
              </Navbar>
            </Header>

            <Routes>
              <Route path="/dashboard" element={<div>Dashboard</div>} />
              <Route path="/projects" element={<div>Projects</div>} />
              <Route path="/billing" element={<div>Billing</div>} />
              <Route path="/analytics" element={<div>Analytics</div>} />
              <Route path="/settings" element={<div>Settings</div>} />
            </Routes>
          </Box>
        </Router>
      </MantineProvider>
    </ClerkProvider>
  );
}
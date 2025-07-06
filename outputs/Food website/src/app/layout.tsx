import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { MantineProvider } from '@mantine/core';
import { Navbar, Header, InterviewQuestion, Loader, Button, Group, Text, Box, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <ClerkProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Navbar p="md" hiddenBreakpoint="lg" hidden={!opened} width={{ sm: 200, lg: 300 }} style={{ backgroundColor: theme.colors.gray[8] }}>
            <Navbar.Section grow mt="md">
              <Link to="/dashboard">
                <InterviewQuestion>Dashboard</InterviewQuestion>
              </Link>
              <Link to="/projects">
                <InterviewQuestion>Projects</InterviewQuestion>
              </Link>
              <Link to="/billing">
                <InterviewQuestion>Billing</InterviewQuestion>
              </Link>
              <Link to="/analytics">
                <InterviewQuestion>Analytics</InterviewQuestion>
              </Link>
              <Link to="/settings">
                <InterviewQuestion>Settings</InterviewQuestion>
              </Link>
            </Navbar.Section>
          </Navbar>

          <Header height={60} p="md">
            <MediaQuery largerThan="sm" styles={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Burger opened={opened} onClick={toggle} size="sm" color={theme.colors.gray[6]} mr="xl" />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Text ta="center" fz="xl" fw={500}>
                  Company Name
                </Text>
                <Button variant="default" color="blue">
                  Upgrade
                </Button>
              </Box>
            </MediaQuery>
          </Header>

          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="billing" element={<Billing />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Routes>

          {children}

          <Loader />
        </BrowserRouter>
      </MantineProvider>
    </ClerkProvider>
  );
};

const Dashboard = () => <div>Dashboard</div>;
const Projects = () => <div>Projects</div>;
const Billing = () => <div>Billing</div>;
const Analytics = () => <div>Analytics</div>;
const Settings = () => <div>Settings</div>;

export default Layout;
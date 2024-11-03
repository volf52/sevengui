import "@mantine/core/styles.css"
import {
  AppShell,
  Center,
  Container,
  MantineProvider,
  Tabs,
} from "@mantine/core"

const App = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell padding="md">
        <AppShell.Main>
          <Tabs
            keepMounted={false}
            activateTabWithKeyboard={false}
            defaultValue="home"
          >
            <Tabs.List justify="center">
              <Tabs.Tab value="home">Home</Tabs.Tab>
              <Tabs.Tab value="counter">Counter</Tabs.Tab>
            </Tabs.List>

            <Container fluid style={{ overflow: "hidden" }}>
              <Center my={5} h="88vh">
                <Tabs.Panel value="home">
                  Work on the 7GUI tasks with React
                </Tabs.Panel>
                <Tabs.Panel value="counter">Counter</Tabs.Panel>
              </Center>
            </Container>
          </Tabs>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

export default App
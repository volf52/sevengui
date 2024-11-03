import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import {
  AppShell,
  Center,
  Container,
  MantineProvider,
  Tabs,
} from "@mantine/core"
import Counter from "./components/Counter"
import TemperatureConverter from "./components/Temperature"
import FlightBooker from "./components/FlightBooker"
import Timer from "./components/Timer"

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
              <Tabs.Tab value="temperature">Temperature</Tabs.Tab>
              <Tabs.Tab value="flight">Flight Booker</Tabs.Tab>
              <Tabs.Tab value="timer">Timer</Tabs.Tab>
            </Tabs.List>

            <Container fluid style={{ overflow: "hidden" }}>
              <Center my={5} mih="88vh">
                <Tabs.Panel value="home">
                  Work on the 7GUI tasks with React
                </Tabs.Panel>
                <Tabs.Panel value="counter">
                  <Counter />
                </Tabs.Panel>
                <Tabs.Panel value="temperature">
                  <TemperatureConverter />
                </Tabs.Panel>
                <Tabs.Panel value="flight">
                  <FlightBooker />
                </Tabs.Panel>
                <Tabs.Panel value="timer">
                  <Timer />
                </Tabs.Panel>
              </Center>
            </Container>
          </Tabs>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

export default App

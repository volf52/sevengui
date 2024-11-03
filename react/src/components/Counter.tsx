import { Box, Button, Fieldset, Group } from "@mantine/core"
import { useCallback, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount((old) => old + 1)
  }, [])
  const decrement = useCallback(() => {
    setCount((old) => Math.max(old - 1, 0))
  }, [])

  return (
    <Fieldset>
      <Box>Current count: {count}</Box>

      <Group justify="center">
        <Button mt="1rem" mr={8} variant="gradient" onClick={increment}>
          +
        </Button>
        <Button
          mt="1rem"
          ml={8}
          variant="gadient"
          onClick={decrement}
          disabled={count === 0}
        >
          -
        </Button>
      </Group>
    </Fieldset>
  )
}

export default Counter

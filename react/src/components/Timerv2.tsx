import {
  Text,
  Fieldset,
  Group,
  Progress,
  Slider,
  Button,
  Center,
} from "@mantine/core"
import { type FC, useEffect, useMemo, useState } from "react"

interface TimerDisplayProps {
  duration: number
  reset: boolean
}

const TimerDisplay: FC<TimerDisplayProps> = ({ duration, reset }) => {
  const [elapsed, setElapsed] = useState(0)
  const percentage = useMemo(
    () => (elapsed * 100) / duration,
    [elapsed, duration],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((val) => val + 0.1)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setElapsed(0)
  }, [reset])

  return (
    <>
      <Group variant="label" grow wrap="nowrap">
        Elapsed:
        <Progress
          my={16}
          value={percentage}
          size="lg"
          miw={400}
          transitionDuration={200}
        />
      </Group>

      <Text>{elapsed.toFixed(2)} s</Text>
    </>
  )
}

const Timer = () => {
  const [duration, setDuration] = useState(50)
  const [reset, setReset] = useState(false)

  return (
    <Fieldset miw="30%" h="100%">
      <TimerDisplay duration={duration} reset={reset} />

      <Text mt="1rem">Duration:</Text>
      <Slider
        min={0.1}
        max={100}
        step={0.1}
        value={duration}
        onChange={(e) => {
          setDuration(e)
        }}
      />

      <Center mt="1rem">
        <Button onClick={() => setReset((prev) => !prev)}>Reset</Button>
      </Center>
    </Fieldset>
  )
}

export default Timer

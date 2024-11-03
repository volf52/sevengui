import { Divider, Fieldset, NativeSelect } from "@mantine/core"
import { DateInput } from "@mantine/dates"
import { useCallback, useMemo, useState } from "react"
import dayjs from "dayjs"

const STATES = [
  { label: "One-Way Flight", value: "oneway" },
  { label: "Return Flight", value: "twoway" },
]
const ONE_WAY = STATES[0].value

const FlightBooker = () => {
  const [val, setVal] = useState(ONE_WAY)
  const isOneWay = useMemo(() => val === ONE_WAY, [val])
  const [fromDate, setFromDate] = useState<Date | null>(null)

  const calcMinReturnDate = useCallback(() => {
    if (fromDate === null) return

    return dayjs(fromDate).add(1, "day").toDate()
  }, [fromDate])

  return (
    <Fieldset py="lg">
      <NativeSelect
        value={val}
        data={STATES}
        onChange={(e) => setVal(e.currentTarget.value)}
        mb="md"
      />
      <Divider />

      <DateInput
        value={fromDate}
        onChange={(e) => setFromDate(e)}
        clearable
        mt="md"
        mb="sm"
        placeholder="From"
      />
      <DateInput
        clearable
        mt="sm"
        minDate={calcMinReturnDate()}
        placeholder={isOneWay ? "Return (N/A)" : "Return"}
        disabled={isOneWay}
      />
    </Fieldset>
  )
}

export default FlightBooker

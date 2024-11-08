import { Divider, Fieldset, NativeSelect } from "@mantine/core"
import { DateInput } from "@mantine/dates"
import { useMemo, useState } from "react"
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
  const [returnDate, setReturnDate] = useState<Date | null>(null)

  const minRetDate = useMemo(() => {
    if (fromDate === null) return

    return dayjs(fromDate).add(1, "day").toDate()
  }, [fromDate])

  const isInvalid = useMemo(() => {
    if (!returnDate || !minRetDate) return false

    return returnDate.getTime() < minRetDate.getTime()
  }, [returnDate, minRetDate])

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
        value={returnDate}
        onChange={(e) => setReturnDate(e)}
        minDate={minRetDate}
        placeholder={isOneWay ? "Return (N/A)" : "Return"}
        disabled={isOneWay}
        error={isInvalid ? "Please enter a valid return date" : undefined}
      />
    </Fieldset>
  )
}

export default FlightBooker

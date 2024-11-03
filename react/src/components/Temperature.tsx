import { Fieldset, NumberInput } from "@mantine/core"
import { useCallback, useState } from "react"

const useTemperature = () => {
  const [tempCel, setTempCel] = useState(0)
  const [tempFahr, setTempFahr] = useState(0)

  const updateCel = useCallback((newCel: number) => {
    const newFahr = (9 / 5) * newCel + 32

    setTempCel(newCel)
    setTempFahr(newFahr)
  }, [])

  const updateFahr = useCallback((newFahr: number) => {
    const newCel = ((newFahr - 32) * 5) / 9

    setTempCel(newCel)
    setTempFahr(newFahr)
  }, [])

  return {
    tempCel,
    tempFahr,
    updateCel,
    updateFahr,
  }
}

const TemperatureConverter = () => {
  const { tempCel, tempFahr, updateCel, updateFahr } = useTemperature()

  return (
    <Fieldset>
      <NumberInput
        allowDecimal
        fixedDecimalScale
        defaultValue={0}
        decimalScale={2}
        label="Celsius"
        labelProps={{ mb: 8 }}
        value={tempCel}
        onChange={(e) => updateCel(e as number)}
      />
      <NumberInput
        allowDecimal
        fixedDecimalScale
        defaultValue={0}
        decimalScale={2}
        label="Fahrenheit"
        labelProps={{ mb: 8, mt: 16 }}
        value={tempFahr}
        onChange={(e) => updateFahr(e as number)}
      />
    </Fieldset>
  )
}

export default TemperatureConverter

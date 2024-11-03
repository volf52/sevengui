import {
  Button,
  ButtonGroup,
  Fieldset,
  Grid,
  Group,
  List,
  Stack,
  TextInput,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { useCallback, useMemo, useState } from "react"

const labelProps = { mb: "0.25rem" }

type User = {
  id: number
  name: string
  surname: string
}

let counter = 10
const getId = () => {
  counter += 1
  return counter
}

const CRUD = () => {
  const [users, setUsers] = useState<User[]>([
    { name: "John", surname: "Snow", id: 1 },
    { name: "Tyrion", surname: "Lannister", id: 2 },
  ])

  const [filter, setFilter] = useState("")
  const filteredNames = useMemo(
    () => users.filter((n) => n.surname.toLowerCase().startsWith(filter)),
    [users, filter],
  )
  const [selected, setSelected] = useState(-1)

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      surname: "",
    },
    validate: {
      name: (v) => v.length > 0,
      surname: (v) => v.length > 0,
    },
  })

  const reset = useCallback(() => {
    setSelected(-1)
    form.setValues({ name: "", surname: "" })
  }, [form])

  const handleFilterUpdate = useCallback((txt: string) => {
    setFilter(txt)
  }, [])

  const handleListClick = useCallback(
    (id: number) => {
      const user = users.find((u) => u.id === id)
      if (!user) return

      setSelected(user.id)
      form.setValues({ name: user.name, surname: user.surname })
    },
    [users, form],
  )

  const handleCreate = useCallback(() => {
    const values = form.getValues()
    if (!values.name || !values.surname) return

    setUsers((n) => [...n, { id: getId(), ...values }])

    reset()
  }, [reset, form])

  const handleUpdate = useCallback(() => {
    const values = form.getValues()

    const user = users.find((u) => u.id === selected)
    if (!user) return

    user.name = values.name
    user.surname = values.surname

    setUsers([...users])
  }, [users, form, selected])

  const handleDelete = useCallback(() => {
    setUsers((old) => old.filter((u) => u.id !== selected))
    reset()
  }, [reset, selected])

  return (
    <Fieldset>
      <Grid columns={2} grow>
        <Grid.Col span={2}>
          <TextInput
            label="Filter:"
            labelProps={labelProps}
            value={filter}
            onChange={(e) => handleFilterUpdate(e.currentTarget.value)}
          />
        </Grid.Col>

        <Grid.Col span={1}>
          <List type="unordered">
            {filteredNames.map((user) => (
              <List.Item
                bg={selected === user.id ? "teal" : undefined}
                key={`${user.id}${user.name}${user.surname}`}
                onClick={() => handleListClick(user.id)}
              >
                {user.surname}, {user.name}
              </List.Item>
            ))}
          </List>
        </Grid.Col>
        <Grid.Col span={1}>
          <Stack>
            <TextInput
              label="First Name:"
              labelProps={labelProps}
              key={form.key("name")}
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Surname:"
              labelProps={labelProps}
              key={form.key("surname")}
              {...form.getInputProps("surname")}
            />
          </Stack>
        </Grid.Col>

        <Grid.Col
          span="auto"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Group>
            <ButtonGroup>
              <Button color="lime" onClick={handleCreate}>
                Create
              </Button>
              <Button color="blue" onClick={handleUpdate}>
                Update
              </Button>
              <Button color="red" onClick={handleDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </Group>
        </Grid.Col>
      </Grid>
    </Fieldset>
  )
}

export default CRUD

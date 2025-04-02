# Select

The Select component allows users to choose a single value from a dropdown list of options.

## Features

- Accessible dropdown select component
- Two trigger sizes: default and small
- Support for option groups with labels
- Customizable styling
- Dropdown with automatic positioning
- Keyboard navigation support

## Usage

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@antixuser/antix-ui";

// Basic usage
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>

// With option groups
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a food" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

// Small size
<Select>
  <SelectTrigger size="sm">
    <SelectValue placeholder="Small select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

// In a form with React Hook Form
<FormField
  control={form.control}
  name="language"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Language</FormLabel>
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="de">German</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Components and Props

### Select

Root component that manages the select state.

| Prop          | Type                    | Default   | Description                                          |
| ------------- | ----------------------- | --------- | ---------------------------------------------------- |
| value         | string                  | undefined | The controlled value of the select                   |
| defaultValue  | string                  | undefined | The default value (uncontrolled)                     |
| onValueChange | (value: string) => void | undefined | Function called when the value changes               |
| open          | boolean                 | undefined | Whether the select is open (controlled)              |
| defaultOpen   | boolean                 | undefined | Whether the select is open by default (uncontrolled) |
| onOpenChange  | (open: boolean) => void | undefined | Function called when the open state changes          |
| name          | string                  | undefined | Name attribute for form submission                   |
| disabled      | boolean                 | false     | Whether the select is disabled                       |

### SelectTrigger

Button that opens the select dropdown.

| Prop      | Type              | Default   | Description                                  |
| --------- | ----------------- | --------- | -------------------------------------------- |
| size      | "default" \| "sm" | "default" | Size of the trigger                          |
| className | string            | undefined | Additional CSS classes                       |
| children  | ReactNode         | required  | Content of the trigger (usually SelectValue) |

### SelectValue

Component to display the selected value within the trigger.

| Prop        | Type   | Default   | Description                            |
| ----------- | ------ | --------- | -------------------------------------- |
| placeholder | string | undefined | Text to show when no value is selected |
| className   | string | undefined | Additional CSS classes                 |

### SelectContent

Dropdown content containing the select options.

| Prop      | Type                       | Default   | Description                   |
| --------- | -------------------------- | --------- | ----------------------------- |
| position  | "popper" \| "item-aligned" | "popper"  | Position strategy             |
| className | string                     | undefined | Additional CSS classes        |
| children  | ReactNode                  | required  | Content (usually SelectItems) |

### SelectItem

Selectable option in the dropdown.

| Prop      | Type      | Default   | Description                  |
| --------- | --------- | --------- | ---------------------------- |
| value     | string    | required  | Value of the item            |
| disabled  | boolean   | false     | Whether the item is disabled |
| className | string    | undefined | Additional CSS classes       |
| children  | ReactNode | required  | Content of the item          |

### SelectGroup

Group related select items.

| Prop      | Type      | Default   | Description                                   |
| --------- | --------- | --------- | --------------------------------------------- |
| className | string    | undefined | Additional CSS classes                        |
| children  | ReactNode | required  | Content (usually SelectLabel and SelectItems) |

### SelectLabel

Label for a group of items.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Label text             |

### SelectSeparator

Visual separator between items or groups.

| Prop      | Type   | Default   | Description            |
| --------- | ------ | --------- | ---------------------- |
| className | string | undefined | Additional CSS classes |

## Accessibility

- Built on Radix UI's accessible select primitive
- Full keyboard navigation
- Proper ARIA attributes
- Focus management for screen readers
- Support for forms and form validation

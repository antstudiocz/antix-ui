# Checkbox

The Checkbox component allows users to select one or multiple items from a set of options.

## Features

- Multiple visual variants: default, primary, secondary, and conversion
- Support for custom check icons
- Accessibility features built-in
- Fully customizable with className prop

## Usage

```tsx
import { Checkbox } from "@antixuser/antix-ui";

// Basic usage
<Checkbox />

// With label (using a label element)
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms and conditions</label>
</div>

// Different variant
<Checkbox variant="conversion" />

// With custom icon
<Checkbox
  checked
  icon={<CustomCheckIcon />}
/>

// In a form with React Hook Form
<FormField
  control={form.control}
  name="acceptTerms"
  render={({ field }) => (
    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      <FormLabel>Accept terms and conditions</FormLabel>
    </FormItem>
  )}
/>
```

## Props

| Prop            | Type                                                  | Default   | Description                                  |
| --------------- | ----------------------------------------------------- | --------- | -------------------------------------------- |
| variant         | "default" \| "primary" \| "secondary" \| "conversion" | "default" | Visual style of the checkbox                 |
| checked         | boolean                                               | undefined | Whether the checkbox is checked (controlled) |
| defaultChecked  | boolean                                               | undefined | Default checked state (uncontrolled)         |
| onCheckedChange | (checked: boolean) => void                            | undefined | Function called when checked state changes   |
| disabled        | boolean                                               | false     | Whether the checkbox is disabled             |
| required        | boolean                                               | false     | Whether the checkbox is required             |
| name            | string                                                | undefined | Name attribute for the checkbox              |
| value           | string                                                | undefined | Value attribute for the checkbox             |
| id              | string                                                | undefined | ID attribute for the checkbox                |
| icon            | ReactNode                                             | undefined | Custom icon to display when checked          |
| className       | string                                                | undefined | Additional CSS classes                       |

Plus all standard HTML input (type="checkbox") attributes.

## Variants

### Default

Standard checkbox style with primary accent.

### Primary

Primary-themed checkbox with matching focus states.

### Secondary

Secondary-themed checkbox.

### Conversion

Conversion-themed checkbox (suitable for CTAs).

## Accessibility

- Uses Radix UI's accessible checkbox primitive
- Proper keyboard navigation support
- Focus management with visible focus states
- Supports ARIA attributes

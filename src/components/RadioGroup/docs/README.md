# RadioGroup

The RadioGroup component allows users to select a single option from a list of choices.

## Features

- Multiple visual variants for RadioGroupItem: default, primary, secondary, and conversion
- Support for custom indicator icons
- Accessibility features built-in
- Customizable layout via className property
- Support for form integration

## Usage

```tsx
import { RadioGroup, RadioGroupItem } from "@antixuser/antix-ui";

// Basic usage
<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <label htmlFor="option1">Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <label htmlFor="option2">Option 2</label>
  </div>
</RadioGroup>

// With variants
<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" variant="primary" />
    <label htmlFor="option1">Primary Style</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" variant="conversion" />
    <label htmlFor="option2">Conversion Style</label>
  </div>
</RadioGroup>

// With custom icon
<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem
      value="option1"
      id="option1"
      icon={<StarIcon className="size-2" />}
    />
    <label htmlFor="option1">Custom Icon</label>
  </div>
</RadioGroup>

// In a form with React Hook Form
<FormField
  control={form.control}
  name="subscription"
  render={({ field }) => (
    <FormItem className="space-y-3">
      <FormLabel>Subscription Plan</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="free" id="free" />
            <label htmlFor="free">Free</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pro" id="pro" />
            <label htmlFor="pro">Pro</label>
          </div>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

## RadioGroup Props

| Prop          | Type                    | Default   | Description                                          |
| ------------- | ----------------------- | --------- | ---------------------------------------------------- |
| defaultValue  | string                  | undefined | The value of the default checked item (uncontrolled) |
| value         | string                  | undefined | The controlled value of the checked item             |
| onValueChange | (value: string) => void | undefined | Function called when the value changes               |
| name          | string                  | undefined | The name of the group for form submission            |
| required      | boolean                 | false     | Whether a selection is required                      |
| disabled      | boolean                 | false     | Whether the entire group is disabled                 |
| className     | string                  | undefined | Additional CSS classes for the group                 |

Plus all standard HTML fieldset attributes.

## RadioGroupItem Props

| Prop      | Type                                                  | Default   | Description                                    |
| --------- | ----------------------------------------------------- | --------- | ---------------------------------------------- |
| variant   | "default" \| "primary" \| "secondary" \| "conversion" | "default" | Visual style of the radio item                 |
| value     | string                                                | required  | Value associated with this item                |
| disabled  | boolean                                               | false     | Whether this specific item is disabled         |
| required  | boolean                                               | false     | Whether this specific item is required         |
| icon      | ReactNode                                             | undefined | Custom indicator icon to display when selected |
| className | string                                                | undefined | Additional CSS classes for the item            |

Plus all standard HTML input attributes.

## Variants

### Default

Standard radio button style with primary accent.

### Primary

Primary-themed radio button with matching focus states.

### Secondary

Secondary-themed radio button.

### Conversion

Conversion-themed radio button (suitable for CTAs).

## Accessibility

- Uses Radix UI's accessible radio group primitive
- Proper keyboard navigation support
- Supports standard ARIA attributes
- Focus states for keyboard users

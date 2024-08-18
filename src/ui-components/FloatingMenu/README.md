# FloatingMenu Component

The `FloatingMenu` component provides a flexible and accessible way to create floating menus in your application.

## Components Overview

- **FloatingMenu**: Provides context and state management for the floating menu.
- **FloatingMenuTrigger**: The element that triggers the floating menu to open.
- **FloatingMenuContent**: The content of the floating menu, including headings, descriptions, and actions.
- **FloatingMenuHeading**: Optional heading for the menu content, useful for accessibility.
- **FloatingMenuDescription**: Optional description for the menu content, useful for accessibility.
- **FloatingMenuClose**: A button to close the floating menu.

## Installation

To use the `FloatingMenu` component, first you need to install the [Floating UI Library](https://floating-ui.com/).

```bash
npm install @floating-ui/react
```

Then import the necessary components:

```typescript
import {
  FloatingMenu,
  FloatingMenuTrigger,
  FloatingMenuContent,
  FloatingMenuHeading,
  FloatingMenuDescription,
  FloatingMenuClose,
} from "./FloatingMenu";
```

## Usage

```typescript
<FloatingMenu initialOpen={false} placement="bottom">
  <FloatingMenuTrigger>
    <button>Open Menu</button>
  </FloatingMenuTrigger>
  <FloatingMenuContent>
    <FloatingMenuHeading>Menu Title</FloatingMenuHeading>
    <FloatingMenuDescription>This is a description of the menu.</FloatingMenuDescription>
    <ul>
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
      <li><a href="#">Menu Item 3</a></li>
    </ul>
    <FloatingMenuClose>Close</FloatingMenuClose>
  </FloatingMenuContent>
</FloatingMenu>
```

## Props

### FloatingMenu

- initialOpen: boolean - Determines if the menu is open by default.
- placement: Placement - Controls where the menu appears relative to the trigger (e.g., bottom, top, left, right).
- modal: boolean - If true, the menu behaves as a modal, trapping focus inside.

## Accessibility Considerations

The FloatingMenuHeading and FloatingMenuDescription components help make the menu accessible by providing the appropriate ARIA attributes.

## Customizations

You can easily customize the appearance of the FloatingMenu components by passing custom class names or styles to each component.

# react-native-ui

**react-native-ui** is a powerful, customizable, and easy-to-use set of React Native components that help you build beautiful, high-quality mobile applications with ease. This library aims to provide a solid foundation for developing user interfaces that are consistent, accessible, and highly reusable.

## Features

- **Customizable Components**: Easily adjust styles, colors, and behaviors to match your design system.
- **Responsive Design**: Create layouts that look great on all devices, supporting both iOS and Android.
- **Performance Optimized**: Components are optimized for performance to ensure smooth and fast user experiences.
- **Accessibility Support**: Built with accessibility in mind to make your apps usable by everyone.
- **Comprehensive Documentation**: Detailed documentation and examples to help you get started quickly and effectively.

## Components Included

- **Buttons**: Various button styles including primary, secondary, outline, and more.
- **Forms**: Input fields, checkboxes, radio buttons, and form validation helpers.
- **Typography**: Text components that handle different styles and sizes for headers, paragraphs, and more.
- **Modals**: Customizable modal dialogs for alerts, confirmations, and more.
- **Cards**: Pre-styled card components for displaying content in a structured manner.
- **Lists**: Efficient and flexible list components for displaying data collections.

## Getting Started

To get started with **react-native-ui**, follow these steps:

1. **Installation**:
    ```sh
    pnpm i react-native-ui
    ```
    or
   ```sh
     npm install react-native-ui
    ```
    or
    ```sh
    yarn add react-native-ui
    ```

3. **Usage**:
    ```jsx
    import { Button, Card, Text } from 'react-native-ui';

    const App = () => (
      <Card>
        <Text variant="header">Welcome to react-native-ui</Text>
        <Button onPress={() => alert('Button pressed!')}>Press me</Button>
      </Card>
    );

    export default App;
    ```

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](https://github.com/Mael-conception/react-native-ui/blob/main/LICENSE) file for details.

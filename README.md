# fast-food

## Study Notes

### `*.d.ts`

`*.d.ts` like `images.d.ts` is a file that contains the type definitions in TypeScript. For example, the content of `images.d.ts` is entries like:

```ts
declare module "*.png" {
  const value: any;
  export default value;
}
```

This means that any file with the extension `.png` will be treated as a module and can be imported or exported.

### TouchableOpacity & Pressable

The [`TouchableOpacity`](https://reactnative.dev/docs/touchableopacity) and [`Pressable`](https://reactnative.dev/docs/pressable) components from `react-native` are used to create interactive elements that can be pressed or tapped.

The `Pressable` component is a more general and powerful component which provides more control over the interaction.

### Safe Area

The [`SafeAreaView`](https://reactnative.dev/docs/safeareaview) component from `react-native-safe-area-context` is used to ensure that the content is not covered by the status bar, navigation bar or any system UI.

### Slot

The [`Slot`](https://docs.expo.dev/versions/latest/sdk/router/#slot) component from `expo-router` is used to render the current route.

### Redirect

The [`Redirect`](https://docs.expo.dev/versions/latest/sdk/router/#redirect) component from `expo-router` is used to redirect to a different route.

### FlatList & ScrollView

The [`FlatList`](https://reactnative.dev/docs/flatlist) component is used to display a list of items. It shouldn't wrap a `ScrollView` component, since it uses some optimizations to render the list items and can be conflicting with the `ScrollView` component.

### Appwrite

[Appwrite](https://appwrite.io/) is a backend as a service (BaaS) that provides a set of APIs to handle user authentication, database, storage, and more.

### Sentry

[Sentry](https://sentry.io) is a platform for monitoring and error tracking.

### Zustand

[Zustand](https://github.com/pmndrs/zustand) is a state management library.

## Resources

- [Assets](https://drive.google.com/drive/u/1/folders/1cO2k9gz_Z8P6AV7cL49x6bI6t1Ac0LOo)
- [Preview Repo](https://github.com/adrianhajdin/food_ordering)
- [Video Tutorial](https://www.youtube.com/watch?v=LKrX390fJMw)
- And [more on the jsm website](https://jsm.dev/rn-food-kit)

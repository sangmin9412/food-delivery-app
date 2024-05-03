declare module 'react-native-keyboard-aware-scrollview' {
  import {Constructor} from 'react-native/types/private/Utilities';
  import * as React from 'react';
  import {ViewProps} from 'react-native';
  class KeyboardAwareScrollViewComponents extends React.Component<ViewProps> {}
  const KeyboardAwareScrollViewBase: KeyboardAwareScrollViewComponents &
    Constructor<any>;
  class KeyboardAwareScrollView extends KeyboardAwareScrollViewComponents {}
  export {KeyboardAwareScrollView};
}

import {
  Keyboard,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const DismissKeyboardHOC = (
  Comp: typeof KeyboardAwareScrollView,
): React.FC<{children: React.ReactNode; style?: StyleProp<ViewStyle>}> => {
  return ({children, ...props}) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props} style={props.style}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};

const DismissKeyboardView = DismissKeyboardHOC(KeyboardAwareScrollView);

export default DismissKeyboardView;

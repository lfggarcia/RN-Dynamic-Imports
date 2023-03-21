import type {GestureResponderEvent} from 'react-native';

export interface HeaderProps {
  onChange: (text: string) => void;
  value: string;
  onClose: ((event: GestureResponderEvent) => void) | undefined;
  onNext: ((event: GestureResponderEvent) => void) | undefined;
  label: string;
  placeholder: string;
}

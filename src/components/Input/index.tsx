import { Icon, IInputProps, Input as InputNative } from 'native-base';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import { Pressable } from 'react-native';

interface IProps extends IInputProps {
  icon?: string;
}

const colors = new Map();
colors.set(true, 'secondary.500');
colors.set(false, 'gray.300');

export function Input({ icon, value, onChangeText, ...rest }: IProps) {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const reset = () => onChangeText('');

  const InputLeftElement = useCallback(
    () => (
      <Icon
        as={<Feather />}
        name={icon}
        color={colors.get(!!value || isFocus)}
        size={4}
        ml={4}
      />
    ),
    [value, isFocus, icon]
  );

  const InputRightElelent = useCallback(
    () => (
      <Pressable onPress={reset}>
        <Icon
          as={<MaterialIcons />}
          name='close'
          color='gray.400'
          size='md'
          mr={4}
        />
      </Pressable>
    ),
    [reset]
  );

  return (
    <InputNative
      width='100%'
      height={12}
      flexDirection='row'
      alignItems='center'
      backgroundColor='primary.400'
      placeholderTextColor='gray.300'
      color='gray.200'
      fontSize='lg'
      InputLeftElement={<InputLeftElement />}
      InputRightElement={<InputRightElelent />}
      onFocus={onFocus}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      {...rest}
    />
  );
}

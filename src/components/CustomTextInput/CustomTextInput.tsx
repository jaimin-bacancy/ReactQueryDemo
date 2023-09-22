import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './CustomTextInput.styles';

type CustomTextInputTypes = {
  label: string;
};

export const CustomTextInput = ({
  label,
  value,
  placeholder,
  onChangeText,
  ...props
}: TextInputProps & CustomTextInputTypes) => {
  return (
    <View style={styles.viewCustomTextInput}>
      <Text style={styles.textLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholderTextColor={Colors.darker}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
};

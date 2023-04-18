import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...inputProps }: TextInputProps) {
  return (
    <TextInputContainer>
      {Boolean(prefix) && <Prefix>{prefix}</Prefix>}
      <Input {...inputProps} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'

import { ComponentProps, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ prefix, ...inputProps }, ref)  => {
  return (
    <TextInputContainer>
      {Boolean(prefix) && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...inputProps} />
    </TextInputContainer>
  )
})

TextInput.displayName = 'TextInput'

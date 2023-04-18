import { Box, Text, Textarea, TextareaProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Textarea',
  component: Textarea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextareaProps>

export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Type any observations...',
  },
}

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  },
}

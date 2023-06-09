import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@luizfm-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    size: '5xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}

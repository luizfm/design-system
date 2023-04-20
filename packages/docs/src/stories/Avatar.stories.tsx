import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@luizfm-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://www.github.com/luizfm.png',
    alt: 'Luiz Fernando de Morais',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

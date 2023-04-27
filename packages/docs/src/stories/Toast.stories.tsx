import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@luizfm-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: 'Hello World',
    description: 'Welcome to luizfm ui React',
    openLabel: 'Add to calendar',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

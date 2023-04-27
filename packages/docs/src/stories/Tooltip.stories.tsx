import { Meta, StoryObj } from '@storybook/react'
import { Toast, Tooltip, TooltipProps } from '@luizfm-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    trigger: (
      <Toast
        openLabel="23"
        title="Schedule arranged"
        description="Scheduled on October 23"
        swipeDirection="right"
      />
    ),
    children: 'This date is available to schedule something',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

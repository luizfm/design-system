import * as RadixTooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translate(0)',
  },
})

export const TooltipContainer = styled(RadixTooltip.Provider, {})

export const TooltipRoot = styled(RadixTooltip.Root, {})
export const TooltipPortal = styled(RadixTooltip.Portal, {})
export const TooltipContent = styled(RadixTooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  color: '$gray100',
  fontWeight: '$medium',
  fontSize: '$sm',
  borderRadius: '$sm',

  '&[data-state="delayed-open"][data-side="bottom]': {
    animation: `${slideUpAndFade} 400ms ease-in`,
  },
})
export const TooltipTrigger = styled(RadixTooltip.Trigger, {})

export const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
})

import React, { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  trigger: React.ReactElement
}

export function Tooltip({ trigger, children, ...props }: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      <TooltipRoot>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {children}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}

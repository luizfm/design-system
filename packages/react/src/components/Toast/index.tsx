import { SwipeDirection, ToastProvider } from '@radix-ui/react-toast'

import {
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  ToastClose,
} from './styles'
import {
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Button } from '../Button'
import { X } from 'phosphor-react'
import { colors } from '@luizfm-ui/tokens'

export interface ToastProps extends ComponentProps<typeof Button> {
  description?: string
  title: string
  openLabel: string
  onClick?: () => void
  swipeDirection: SwipeDirection
}

export const Toast = forwardRef<HTMLButtonElement, ToastProps>(
  (
    {
      title,
      description,
      swipeDirection = 'right',
      openLabel,
      onClick,
      ...restProps
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false)
    const timeOutRef = useRef(0)

    const handleOpen = useCallback(() => {
      setOpen(false)
      window.clearTimeout(timeOutRef.current)
      timeOutRef.current = window.setTimeout(() => {
        setOpen(true)
        onClick?.()
      }, 100)
    }, [onClick])

    useEffect(() => {
      return () => clearTimeout(timeOutRef.current)
    }, [])

    return (
      <ToastProvider swipeDirection={swipeDirection}>
        <Button
          onClick={handleOpen}
          variant="tertiary"
          ref={ref}
          {...restProps}
        >
          {openLabel}
        </Button>

        <ToastContainer open={open} onOpenChange={setOpen}>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
          <ToastClose asChild>
            <X size={20} weight="bold" color={colors.gray200} />
          </ToastClose>
        </ToastContainer>
        <ToastViewport />
      </ToastProvider>
    )
  },
)

Toast.displayName = 'Toast'

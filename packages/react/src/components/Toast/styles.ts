import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 25px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  padding: '$3 $12 $3 $5',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$1',
  position: 'relative',
  borderRadius: '$sm',
  border: '1px solid $gray600',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  right: '$5',
  top: '$3',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2,
  outline: 'none',
  minWidth: '360px',
  padding: '$5',
})

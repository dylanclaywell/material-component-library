import React, { useState, useRef } from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import { Props as MenuItemProps } from '../MenuItem'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import colors from '../../colors'

type Props = {
  value: string
  label?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  styles?: {
    root?: string
    input?: string
  }
  type?: 'password' | 'email' | 'default'
  variant?: 'default' | 'select'
  children?:
    | React.ReactElement<typeof MenuItemProps>
    | React.ReactElement<typeof MenuItemProps>[]
  fullWidth?: boolean
}

const useStyles = createUseStyles({
  root: {
    position: 'relative' as const,
    borderRadius: '0.5em',
  },
  select: {
    cursor: 'pointer',
  },
  label: {
    position: 'relative' as const,
    display: 'inline-block',
  },
  labelText: {
    position: 'relative',
    color: colors.gray5,
  },
  labelContainer: {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    left: '1.1em',
    fontFamily: 'sans-serif',
    lineHeight: '1em',
    transition: '200ms all',
    color: colors.gray5,
  },
  labelContainerSmall: {
    top: '0',
    left: '1.1em',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    fontSize: '0.8em',
    position: 'absolute',
    transition: '200ms all',
  },
  labelTextActive: {
    color: colors.secondary.dark,
  },
  input: {
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: `1px solid ${colors.borderGray}`,
    padding: '1em',
    outline: 'none',
    fontFamily: 'sans-serif',
    fontSize: '1em',
    '&:active, &:focus': {
      borderColor: colors.secondary.dark,
    },
  },
  dropDownIcon: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 10,
    color: colors.gray5,
    cursor: 'pointer',
  },
  mask: {
    position: 'absolute',
    background: 'white',
    height: '2px',
    width: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  fullWidth: {
    width: '100%',
  },
})

const TextField: React.FC<Props> = ({
  value,
  label,
  onChange,
  styles,
  type = 'default',
  variant = 'default',
  children,
  fullWidth = false,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectMenuIsOpen, setSelectMenuIsOpen] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const classes = useStyles()
  const labelTextClassNames = classnames({
    [classes.labelText]: Boolean(label),
    [classes.labelTextActive]: isFocused,
  })

  if (children && variant !== 'select') {
    throw new Error(
      "Children can only be passed to a TextField if the variant is 'select'"
    )
  }

  const toggleFocus = () => {
    setIsFocused(!isFocused)
  }

  const openSelectMenu = () => {
    setSelectMenuIsOpen(true)
  }

  const closeSelectMenu = () => {
    setSelectMenuIsOpen(false)
  }

  const handleMenuItemClick = (event: Event, value: string) => {
    if (inputRef) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set
      nativeInputValueSetter?.call(inputRef.current, value)

      const ev = new Event('input', { bubbles: true })
      inputRef.current?.dispatchEvent(ev)

      closeSelectMenu()
    }
  }

  return (
    <div className={classnames(classes.root, styles?.root)}>
      <label
        className={classnames(classes.label, {
          [classes.fullWidth]: fullWidth,
        })}
      >
        <span
          className={classnames(classes.labelContainer, {
            [classes.labelContainerSmall]: value || isFocused,
          })}
        >
          <div className={classes.mask}></div>
          <span className={labelTextClassNames}>{label}</span>
        </span>
        <input
          ref={inputRef}
          type={type === 'default' ? '' : type}
          className={classnames(classes.input, styles?.input, {
            [classes.select]: variant === 'select',
            [classes.fullWidth]: fullWidth,
          })}
          value={value}
          onChange={onChange}
          onFocus={variant === 'default' ? toggleFocus : () => {}}
          onBlur={variant === 'default' ? toggleFocus : () => {}}
          onClick={variant === 'select' ? openSelectMenu : () => {}}
          readOnly={variant === 'select'}
        />
        {variant === 'select' && (
          <>
            <i className={classnames('material-icons', classes.dropDownIcon)}>
              arrow_drop_down
            </i>
          </>
        )}
      </label>
      {variant === 'select' && children && (
        <>
          <Menu onClose={closeSelectMenu} isOpen={selectMenuIsOpen}>
            {/* FIXME types */}
            {React.Children.map(children as any, (child) => {
              if (!child) return null

              return React.cloneElement(child, {
                onClick: handleMenuItemClick,
              })
            })}
          </Menu>
        </>
      )}
    </div>
  )
}

export default TextField

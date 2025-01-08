import { ReactElement, useCallback, useContext } from 'react'
import './stepper.scss'
import StepperContext from './StepperContext'
import { StatusPassIcon } from '@storybook/icons'

export interface StepProps {
  label?: string | ReactElement
  value: number
}

export const Step = ({ label, value }: StepProps) => {
  const { step, setStep } = useContext(StepperContext)

  const handleClick = useCallback(
    (value: string | number) => () => {
      setStep(value)
    },
    [step],
  )
  const getClassName = useCallback(
    (stepValue: string | number) => {
      if (stepValue < step) {
        return 'prev'
      } else if (stepValue === step) {
        return 'current'
      } else {
        return 'next'
      }
    },
    [step],
  )
  return (
    <div className={`${value === 1 ? 'ktc-stepper-step-first' : 'ktc-stepper-step'}`}>
      {value !== 1 && (
        <div className={`ktc-stepper-step-bar ktc-stepper-step-bar-${getClassName(value)}`} />
      )}
      <div className={'ktc-stepper-step-wrapper'}>
        <div
          className={`ktc-stepper-step-number ktc-stepper-step-number-${getClassName(value)}`}
          // onClick={handleClick(value)}
        >
          {value < step ? <StatusPassIcon size={22} /> : value}
        </div>
        <div className={`ktc-stepper-step-label ktc-stepper-step-label-${getClassName(value)}`}>
          {label}
        </div>
      </div>
    </div>
  )
}

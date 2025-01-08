import { Stepper, StepperProps } from './Stepper'
import { StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Args } from '@storybook/csf'
import { Button } from '@kt-cloud-front/ui/components'
import { Step } from '@kt-cloud-front/ui/components/stepper/Step'

interface IMeta {
  title: string
  component: object
  parameters?: any
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    activeStep: {
      description: '현재 활성화된 Step을 설정합니다.',
      control: { type: 'text' },
    },
  },
}

export default meta

type Story = StoryObj<StepperProps>

const DefaultTemplate = (args: Args) => {
  const stepList = ['Step1', 'Step2', 'Step3', 'Step4']
  const [activeStep, setActiveStep] = useState<string | number>(1)
  const handleChange = (step: string | number) => {
    setActiveStep(step)
  }
  return (
    <div
      style={{
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stepper activeStep={activeStep}>
        {stepList.map((step: string, index) => (
          <Step key={index} label={step} value={index + 1} />
        ))}
      </Stepper>
      <div
        style={{
          border: '1px solid #e0e0e0',
          padding: 10,
          margin: 20,
          width: '100%',
        }}
      >
        {activeStep === 1 && <span>This is Step1 Content</span>}
        {activeStep === 2 && <span>This is Step2 Content</span>}
        {activeStep === 3 && <span>This is Step3 Content</span>}
        {activeStep === 4 && <span>This is Step4 Content</span>}
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <Button
          label={'이전'}
          size={'small'}
          variant={'outlined'}
          disabled={activeStep === 1}
          onClick={() => {
            handleChange(Number(activeStep) - 1)
          }}
        />
        <Button
          label={'다음'}
          size={'small'}
          disabled={activeStep === stepList.length}
          onClick={() => {
            handleChange(Number(activeStep) + 1)
          }}
        />
      </div>
    </div>
  )
}

export const Default: Story = {
  render: DefaultTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<Stepper activeStep={activeStep}>
  {stepList.map((step: string, index) => (
    <Step key={index} label={step} value={index + 1} />
   ))}
</Stepper>
        `,
      },
    },
  },
}

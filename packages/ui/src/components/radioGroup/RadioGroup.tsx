import React, { ReactNode } from 'react';
import { Radio } from '@kt-cloud-front/ui/components/radio/Radio';
import './radiogroup.scss'

export interface RadioGroupProps {
  direction?: 'row' | 'column'
  name?: string
  children?: ReactNode
}

export const RadioGroup = ({
                             direction='row',
                             name,
                             children,
                             ...props
                           }: RadioGroupProps) => {
  return (
    <div className={`storybook-radio-group-${direction}`}>
      {React.Children.map(children, (child) =>
        <div style={direction == 'row' ?  {paddingRight: '25px'} : {paddingBottom: '13px'}}>
          {React.cloneElement(child as React.ReactElement,
            { name: name, }
          )}
        </div>
      )}
    </div>
  )
}
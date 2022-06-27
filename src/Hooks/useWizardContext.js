import React from 'react'
import { WizardContext } from '../Context/WizardContext'

const useWizardContext = () => {
  const context = React.useContext(WizardContext)
  if(!context) {
    throw new Error('The component must be wrapped in Wizard')
  }
  return context
}

export default useWizardContext
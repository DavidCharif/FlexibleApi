import React from 'react'
import { useWizardNavigation, useWizardPages, useWizardProgress } from '../Hooks/useNavigationWizard'

const Navigation = () => {
  const { currentIndex, steps, goNextPage, goPrevPage } = useWizardNavigation()
  return (
    <div className='container flex justify-around'>
      <button onClick={goPrevPage}
        disabled={currentIndex === 1}
      > Anterior </button>
      <button onClick={goNextPage}
        disabled={currentIndex === steps}
      > Siguiente </button>
    </div>
  )
    
}
export const Pages = ({ children }) => {
  const {activePageIndex} = useWizardPages({totalSteps: React.Children.count(children)})

  return (
    <div className='container flex justify-around'>
      {React.Children.toArray(children)[activePageIndex]}
    </div>
  )
}

export const ProgressBar = () => {
  const { currentIndex, steps } = useWizardProgress()
  return (
    <div className='container flex justify-around'>
      <div className='bg-red-300'>
        Step {currentIndex} of {steps}
      </div>
    </div>
  )
}

export default Navigation
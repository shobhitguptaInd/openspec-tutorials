'use client'

interface Step {
  id: string
  title: string
  completed: boolean
}

interface ProgressTrackerProps {
  steps: Step[]
  currentStep: number
}

export default function ProgressTracker({ steps, currentStep }: ProgressTrackerProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              {step.completed ? (
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : index === currentStep ? (
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
              )}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${
                step.completed 
                  ? 'text-green-600' 
                  : index === currentStep 
                  ? 'text-primary-600' 
                  : 'text-gray-500'
              }`}>
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold text-gray-900">
            {steps.filter(s => s.completed).length} / {steps.length}
          </span>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(steps.filter(s => s.completed).length / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

// Made with Bob

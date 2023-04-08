import type { NextStepExecutor } from '@/shared/hooks/use-step'

export const StepProvideKey = Symbol('Step Provide Key') as InjectionKey<{

  dataSource: Map<string, any>
  onNextStep: (executor: NextStepExecutor) => void
}>

export type WorkflowStep = {
  step: string
  title: string
  text: string
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: '1',
    title: 'Scan',
    text: 'Escanea tu identificación y el artículo que deseas valuar usando nuestra app intuitiva.',
  },
  {
    step: '2',
    title: 'Verify',
    text: 'Validamos la condición de tu equipo e identidad en tiempo real con IA.',
  },
  {
    step: '3',
    title: 'Get Paid',
    text: 'Recibe una oferta competitiva y transfiere el dinero en minutos.',
  },
]

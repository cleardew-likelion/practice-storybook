import CreateTaskForm from "./CreateTaskForm"

export default {
    title: 'CreateTaskForm',
    component: CreateTaskForm,
    argTypes: {
        onSubmit: { action: 'create new task' }
    }
}

export const Default = args => {
    return (
        <CreateTaskForm onSubmit={args.onSubmit} />
    )
}
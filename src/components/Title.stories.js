import Title from "./Title"

export default {
    title: "Title",
    component: Title
}

const Template = args => <Title {...args} />

export const MainTitle = Template.bind({})

MainTitle.args = {
    styleType: "Main",
    children: "My Task List"
}

export const EventTitle = Template.bind({})
EventTitle.args = {
    styleType: "Event",
    children: "Happy New Year! 2022"
}
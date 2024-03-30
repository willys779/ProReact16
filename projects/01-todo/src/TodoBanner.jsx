
export const TodoBanner = ({name, task}) => {
    return (
        <h4 className='bg-primary text-white text-center p-2'>
            {name}&rsquo;s To Do List
            ({task.filter(t => !t.done).length} items to do)
        </h4>
    )
};
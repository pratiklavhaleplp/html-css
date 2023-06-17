const projectName = (projectName = '') => {
    return (
        <>
            <div className='project-name-row-item'>s simply dummy texto make a type specimen book. It has survived not only five centuries</div>
        </>
    )
}
const projectStack = (stack = '') => {
    return (
        <>
            <div className='project-stack-row-item'>s  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
        </>
    )
}
const projectDescription = (projectName = '') => {
    return (
        <>
            <div className='project-description-item'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
        </>
    )
}
const backEndEndProjectContent =
    <>
        <div className='parent-backend-content'>
            <div className='backend-project-header'>
                <div className='project-name'>ProjectName</div>
                <div className='stack'>Stack</div>
                <div className='description'>Description</div>
            </div>
            <div className='backend-project-list'>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
                <div className='one-project-item'>{projectName()}{projectStack()}{projectDescription()}</div>
            </div>
        </div>
    </>
export { backEndEndProjectContent };
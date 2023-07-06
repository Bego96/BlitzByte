function Sidebar(props) {
    console.log(props.showAside);
    return (

        <aside className={`bg-slate-600 h-[100vh] w-[20%] absolute transition-all duration-700 ease ${props.showAside ? 'left-[0%]' : 'left-[-20%]'}`}>
            <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
            </ul>
        </aside>
    )
};

export default Sidebar;
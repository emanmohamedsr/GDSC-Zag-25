import "../Css/nav.css"

function toggleEventList(e) {
    e.currentTarget.classList.toggle("clicked");
    document.querySelector("nav ul").classList.toggle("active");
}
export default function Nav({ setCategory }) {
    const categorys = ["women's clothing", "men's clothing", "jewelery", "electronics", "all"];
    const li = categorys.map((category) =>
        <li key={category}><button onClick={_ => setCategory(category)} className="buttonAsALink">{category}</button></li>
    )
    return (
        <nav>
            <h1>Filtration</h1>
            <ul>
                {li}
            </ul>
            <button className="hamburger" onClick={toggleEventList}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}
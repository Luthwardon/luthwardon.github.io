// PRESETS

let nav_text = `
<nav>
    <a href="overview.html" title="Back to the home page."><h3>Luthwardron Wiki</h3></a>
    <a class="disabled" href="" title="Join the Luthwardron Discord!"><i class="fa-brands fa-discord"></i></a>
    <a class="disabled" href="" title="View an interactive map of the plot.">・Map</a>
    <a href="hall_of_contributions.html" title="Thank you to those who helped create the plot!">・Hall of Contributions</a>
    <a href="javascript:void(0);" onclick="toggleNav()" class="dropdown">
        <i class="fa-solid fa-bars"></i>
    </a>
</nav>
`;
let footer_text = `
<footer>
    <small>
        wiki made by <a href="temp.html">@Glargoe</a> c:
    <br>
        working on a proper page nav :,)
    </small>
</footer>
`

// INSERT PRESETS
let nav = document.getElementById("navigator");
nav.innerHTML = nav_text
let footer = document.getElementById("footer");
footer.innerHTML = footer_text

// RESPONSIVE NAV
function toggleNav() {
    if (nav.className === "") {
        nav.className += "transformnav";
    } else {
        nav.className = "";
    }
}

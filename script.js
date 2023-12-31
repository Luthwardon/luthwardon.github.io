// PRESETS

let nav_text = `
<nav>
    <a href="overview.html"><h3>Luthwardron Wiki</h3></a>
    <a href=""><i class="fa-brands fa-discord"></i></a>
    <a href="">・Hall of Contributions</a>
    <a href="">・Plot Map</a>
    <a href="">・Jots</a>
    <a href="javascript:void(0);" onclick="toggleNav()" class="dropdown">
        <i class="fa-solid fa-bars"></i>
    </a>
</nav>
`;
let footer_text = `
<footer>
    <small>
        wiki made by <a href="temp.html">@Glargoe</a> c:
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
    if (nav.className === "glargnav") {
      nav.className += " transformnav";
    } else {
      nav.className = "glargnav";
    }
  }

// PRESETS

let nav_text = `
<nav>
    <a href="overview.html"><h3>Luthwardron Wiki</h3></a>
    <a href=""><i class="fa-brands fa-discord"></i></a>
</nav>
`;
let footer_text = `
<footer>
    <small>
        wiki made by <a href="/pages/temp.html">@Glargoe</a> c:
    </small>
</footer>
`

// INSERT PRESETS
let nav = document.getElementById("navigator");
nav.innerHTML = nav_text
let footer = document.getElementById("footer");
footer.innerHTML = footer_text

// TEST UPLOAD FROM FILE INTO PAGE

// let page_content_text = ``
// let page_content = document.getElementsByClassName("content");
// page_content.innerHTML = page_content_text

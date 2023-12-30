// PRESETS

let header_text = `
<header>
    <p>
        im still testing stuff
    </p>
</header>
`;
let footer_text = `
<div class="footer">
    <hr>
    <p>
        Footer and header can be changed from the script.js file
    </p><small>
        wiki made by <a href="/pages/temp.html">@Glargoe</a> c:
    </small>
    <hr>
</div>
`

// INSERT PRESETS
let header = document.getElementById("header");
header.innerHTML = header_text
let footer = document.getElementById("footer");
footer.innerHTML = footer_text

// TEST UPLOAD FROM FILE INTO PAGE

// let page_content_text = ``
// let page_content = document.getElementsByClassName("content");
// page_content.innerHTML = page_content_text

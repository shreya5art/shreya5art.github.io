function themeToggle(elem){
    let theme = document.getElementById("theme");
    theme.disabled = !theme.disabled;
    if(theme.disabled){
        elem.classList.add(icons.moon);
        elem.classList.remove(icons.sun);

    }else{
        elem.classList.add(icons.sub);
        elem.classList.remove(icons.moon);
    }
}

window.onscroll = function(e){
    /*console.log(e);
    let main = document.getElementById("footer");
    let elems = document.getElementsByClassName("fixed");
    let mainPos = main.getBoundingClientRect();
    for(i = 0; i < elems.length; i++){
        let screenPos = elems[i].getBoundingClientRect();
        console.log(elems[i].offsetTop, screenPos.bottom, mainPos.bottom,window.scrollY);
        let bottom = screenPos.bottom;
        if(bottom > main.top){
            bottom = main.top;
        }
        if(bottom < window.innerHeight + 100){
            let scroll = window.innerHeight - bottom + elems[i].offsetTop - 100;
            elems[i].style.top = scroll + "px";
        }else{
            console.log("in range");
            elems[i].style.top = "0px";
        }


    }*/

}

function galleryFilter(form, gallery){

    let formData = new FormData(form);

    
    for(let i = 0; i < gallery.childElementCount; i++){

        


    }

}

function priceCalculator(form, submit = false) {

    console.log(form);

    var formData = new FormData(form);
    var size = formData.get("size");
    var medium = formData.get("medium");
    var face = formData.get("face");
    var bg = formData.get("bg");
    var frame = formData.get("frame");

    var body = form.getElementsByClassName("body")[0];
    body.value = "Size%20:%20" + size + "%0D%0AMedium%20:%20" + medium + "%0D%0AFaceCount%20:%20" + face + "%0D%0ABackground%20:%20" + bg + "%0D%0AInstructions%20:%0D%0A";

    console.log(formData);

    var bgPrice = 500;
    var framePrice = 500;

    if (bg == "noBg") bgPrice = 0;
    if (frame == "noFrame") framePrice = 0;

    const sizeMap = new Map();
    sizeMap.set("A2", [(16 + 1 / 2), (23 + 3 / 8)]);
    sizeMap.set("A3", [(11 + 3 / 4), (16 + 1 / 2)]);
    sizeMap.set("11x14", [(11), (14)]);
    sizeMap.set("9x12", [(9), (12)]);
    sizeMap.set("A4", [(8 + 1 / 4), (11 + 3 / 4)]);
    sizeMap.set("A5", [(5 + 7 / 8), (8 + 1 / 4)]);

    const priceMap = new Map();
    priceMap.set("graphite", 1);
    priceMap.set("color", 1.3);
    priceMap.set("mix", 1.75);
    priceMap.set("single", 1);
    priceMap.set("couple", 1.15);
    priceMap.set("family", 1.3);
    priceMap.set("group", 1.5);

    basePrice = customBasePrice;
    baseSize = sizes.A5.size[0]*sizes.A5.size[1];
    orderWidth = sizes[size].size[0];
    orderHeight = sizes[size].size[1];
    orderSize = orderWidth*orderHeight;
    bgPrice = bgs[bg].custom;

    price = (basePrice * orderSize/baseSize) * mediums[medium].custom * faces[face].custom + bgPrice;



    price = Math.round(Math.ceil(price / 500)) * 500;


    var estimate = form.getElementsByClassName("orderEstimate")[0];
    estimate.innerHTML = price.toLocaleString();

    //var width = form.getElementsByClassName("orderWidth")[0];
    //var height = form.getElementsByClassName("orderHeight")[0];
    //width.innerHTML = orderWidth + "inch";
    //height.innerHTML = orderHeight + "inch";

    
    if(submit){
        let a = document.createElement("A");
    a.href = "mailto:order@shreya5art.in?subject=New%20Customized%20Artwork&body="+body.value;
    a.click();
    }
    

}

function activateAboutTab(elem) {
    let tabs = document.getElementsByClassName("aboutTab");
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] == elem) {
            tabs[i].parentElement.classList.add("active");
            tabs[i].parentElement.nextElementSibling.firstElementChild.classList.add("active");
        } else {
            tabs[i].parentElement.classList.remove("active");
        }
    }
}

function switchAboutSection(elem, next) {

    if (next) {
        elem.parentElement.nextElementSibling.classList.add("active");
    } else {
        elem.parentElement.previousElementSibling.classList.add("active");

    }
    elem.parentElement.classList.remove("active");

}

var container = document.createElement("DIV");
var loaded = false;

function loadArtworks(callback) {
    if (loaded) {
        callback();
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            loaded = true;
            container.innerHTML = this.responseText;
            callback();
        }
    };
    xhttp.open("GET", "artworkList.html", true);
    xhttp.send();
}

function displayArtworks() {

    loadArtworks(function () {
        var gallery = document.getElementById("gallery");
        let artworks = container.getElementsByClassName("artwork");
        for (let i = 0; i < artworks.length; i++) {
            var frame = convertToGallery(artworks[i]);
            gallery.appendChild(frame);
        }
    });
}



function displayArtwork(id) {
    loadArtworks(function () {
        var gallery = document.getElementById("galleryViewer");
        var artwork = document.createElement("DIV");
        artwork.innerHTML = '\
        <div class="col artworkViewer" style="position: sticky; bottom: 0; vertical-align: bottom;">\
            <div class="artworkFrame artworkViewer portrait">\
                <img class="thumbnail" src="files/img/2.jpg" />\
                <span class="title artworkTitle">Aishwarya Rai from Ponniyin Selvan: I</span>\
            </div>\
            <div class="artworkSwitcher horizontalScroller">\
                <i class="fa-solid fa-chevron-left"></i>\
                <div class="thumbnail" style="background-image: url(files/img/1.jpg);"></div>\
                <div class="thumbnail" style="background-image: url(files/img/2.jpg);"></div>\
                <div class="thumbnail" style="background-image: url(files/img/3.jpg);"></div>\
                <div class="thumbnail" style="background-image: url(files/img/1.jpg);"></div>\
                <i class="fa-solid fa-chevron-right"></i>\
            </div>\
        </div>\
        <div class="col single artworkDescription" style="vertical-align: bottom;">\
            <h2 class="artworkTitle_placeholder"> Aishwarya Rai form Ponniyin Selvan: I</h2>\
            <p class="artworkDesc_placeholder"></p>\
            <table class="table">\
                <tr>\
                    <th>Medium</th>\
                    <td>Color Pencil</td>\
                </tr>\
                <tr>\
                    <th>Size</th>\
                    <td>A4 </td>\
                </tr>\
                <tr>\
                    <th>Time</th>\
                    <td>10 Days </td>\
                </tr>\
            </table>\
            <div class="salesBox">\
                <div class="col saleCustomizer" style="text-align: left; vertical-align: bottom;">\
                    <label>\
                        <span>Material</span>\
                        <select>\
                            <option></option>\
                        </select>\
                    </label>\
                    <label>\
                        <span>Size</span>\
                        <select>\
                            <option></option>\
                        </select>\
                    </label>\
                    <label>\
                        <span>Frame</span>\
                        <select>\
                            <option></option>\
                        </select>\
                    </label>\
                </div>\
                <div class="col " style="text-align: right; vertical-align: bottom;">\
                    <span class="price">500</span><br>\
                    <button class="button colored">Add to Cart</button>\
                </div>\
            </div>\
            <div style="font-size: .7em; margin-top: 2em;">\
                <p>Offer: 5% off on checkout</p>\
                <p>Free Shipping in India</p>\
                <p>Ships in 4-5 business Days</p>\
            </div>\
        </div>\
        <div class="col artworkTools" style="max-width: 400px; padding: 0 50px; vertical-align: top; margin-top: 2em;">\
            <h3>Tools Used</h3>\
            <div class="tool"></div>\
            <div class="tool"></div>\
            <div class="tool"></div>\
        </div>\
        <div class="col artworkTools"\
            style="max-width: 300px; text-align: left; width: 100%; vertical-align: top; margin-top: 2em;">\
            <h3>Description of Original Artwork</h3>\
            <table class="table">\
                <tr>\
                    <th>Medium</th>\
                    <td>Color Pencil</td>\
                </tr>\
                <tr>\
                    <th>Country of Origin</th>\
                    <td>India</td>\
                </tr>\
                <tr>\
                    <th>Size</th>\
                    <td>A4 </td>\
                </tr>\
                <tr>\
                    <th>Time</th>\
                    <td>10 Days </td>\
                </tr>\
                <tr>\
                    <th>Country of Origin</th>\
                    <td>India</td>\
                </tr>\
            </table>\
        </div>\
        <div class="col artworkTools">\
            <h3>Reviews</h3>\
            <div class="review col shadow" tabindex="0">\
                <div class="thumbnailBox">\
                    <span class="thumbnail"></span>\
                    <span class="rating">\
                        <i class="fa-solid fa-star"></i>\
                        <i class="fa-solid fa-star"></i>\
                        <i class="fa-solid fa-star"></i>\
                        <i class="fa-regular fa-star-half-stroke"></i>\
                        <i class="fa-regular fa-star"></i>\
                    </span>\
                    <date class="date">09/12/2022</date>\
                </div>\
                <div class="reviewBox">\
                    <p>Awesome Drawing and Packaging. Really loved it.</p>\
                    <p style="text-align: right;">\
                        - Ayush Raj <br> Patna, Bihar, India\
                    </p>\
                </div>\
            </div>\
            <div class="review col shadow" tabindex="0">\
                <div class="thumbnailBox">\
                    <span class="thumbnail"></span>\
                    <span class="rating">\
                        <i class="fa-solid fa-star"></i>\
                        <i class="fa-solid fa-star"></i>\
                        <i class="fa-solid fa-star"></i>\
                        <i class="fa-regular fa-star-half-stroke"></i>\
                        <i class="fa-regular fa-star"></i>\
                    </span>\
                    <date class="date">09/12/2022</date>\
                </div>\
                <div class="reviewBox">\
                    <p>Awesome Drawing and Packaging. Really loved it.</p>\
                    <p style="text-align: right;">\
                        - Ayush Raj <br> Patna, Bihar, India\
                    </p>\
                </div>\
            </div>\
        </div>\
    </div>';
        artwork.getElementsByClassName("artworkTitle")[0].innerHTML = container.getElementsByClassName(id + "")[0].getElementsByClassName("artworkTitle")[0].innerHTML;


        var info = container.getElementsByClassName("" + id)[0];
        console.log(info);
        for (let i = 0; i < info.childElementCount; i++) {

            let cl = info.children[i].classList.item(0);
            let hasClass = artwork.getElementsByClassName(cl + "_placeholder")[0];
            if (hasClass) {
                console.log(hasClass.innerHTML);
                hasClass.innerHTML = info.children[i].innerHTML;
            }

        }
        gallery.innerHTML = artwork.innerHTML;
        //gallery.classList.add("active");
        window.location.href = "/?id=1#galleryViewer";
    });
}

function renderToolBox(tool, compact = false){
    var toolDiv = document.createElement("DIV");
                toolDiv.className = "tools " + ((compact)?"compact":"");
                var toolImg = document.createElement("DIV");
                toolImg.className = "img"
                toolImg.style.backgroundImage = "url(files/res/tools/" + tool.img + ")";
                var toolsDesc = document.createElement("DIV");
                var toolName = document.createElement("SPAN");
                toolName.innerHTML = tool.title;
                var toolPrice = document.createElement("P");
                toolPrice.innerHTML = "Starting $20";
                toolsDesc.appendChild(toolName);
                toolsDesc.appendChild(toolPrice);
                toolDiv.appendChild(toolImg);
                toolDiv.appendChild(toolsDesc);
                return toolDiv;
}

function generateToolsPage() {

    var div = document.createElement("DIV");
    div.className = "toolsList";
    var sideBar = document.createElement("DIV");
    sideBar.className = "toolsCategories";

    var categorySection = document.createElement("DIV");
    categorySection.className = "categorySection";
    var categoryName = document.createElement("DIV");
    categoryName.innerHTML = "Brands";
    categorySection.appendChild(categoryName);

    for (const brand in brands) {
        var label = document.createElement("LABEL");
        label.className = "brandLabel"
        var checkBox = document.createElement("INPUT");
        checkBox.type = "checkbox";
        var name = document.createElement("SPAN");
        name.innerHTML = brand;
        label.appendChild(checkBox);
        label.appendChild(name);
        categorySection.appendChild(label);
    }

    sideBar.appendChild(categorySection);


    categorySection = document.createElement("DIV");
    categorySection.className = "categorySection";
    categoryName = document.createElement("DIV");
    categoryName.innerHTML = "Category";
    categorySection.appendChild(categoryName);

    for (const category in tools) {
        console.log(category);
        var section = document.createElement("DIV");
        section.classList.add("row");

        var heading = document.createElement("H3");
        heading.innerHTML = category;

        section.appendChild(heading);

        var label = document.createElement("LABEL");
        var name = document.createElement("SPAN");
        name.innerHTML = category;
        label.appendChild(name);
        categorySection.appendChild(label);

        for (const subCategory in tools[category]) {

            for (const tool in tools[category][subCategory].list) {

                section.appendChild(renderToolBox(tools[category][subCategory].list[tool]));

            }


        }


        div.appendChild(section);

    }

    sideBar.appendChild(categorySection);


    document.getElementById("tools").appendChild(div);
    document.getElementById("tools").appendChild(sideBar);

}



function renderArtworkFrame(artwork) {
    console.log(artwork);
    var frame = document.createElement("a");
    //frame.href = "/?id=1#galleryViewer";
    frame.classList.add("artworkFrame");
    frame.onclick = function () { renderArtworkPage(artwork) };
    var thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail");
    thumbnail.src = "files/img/" + artwork.media.main;
    var title = document.createElement("SPAN");
    title.classList.add("title");
    title.innerHTML = artwork.title;
    frame.appendChild(thumbnail);
    frame.appendChild(title);
    return frame;
}

function renderArtworkPage(artwork) {
    console.log(artwork);
    var gallery = document.getElementById("galleryViewer");

    {
        var artworkImgSection = document.createElement("DIV");
        artworkImgSection.className = "col artworkViewer";

        var image = document.createElement("DIV");
        image.className = "artworkFrame artworkViewer " + ((artwork.size.orientation == orientations.portrait) ? "portrait" : "landscape");
        var img = document.createElement("IMG");
        image.appendChild(img);

        let imageSwitcher = document.createElement("DIV");
        imageSwitcher.className = "artworkSwitcher horizontalScroller";
        let imageLeft = document.createElement("I");
        imageLeft.className = "fa-solid fa-chevron-left";
        let imageRight = document.createElement("I");
        imageRight.className = "fa-solid fa-chevron-right";

        imageSwitcher.appendChild(imageLeft);
        for (const m in artwork.media) {
            let imgSrc = "files/img/" + artwork.media[m];
            let thumbnail = document.createElement("DIV");
            thumbnail.className = "thumbnail";
            thumbnail.style.backgroundImage = 'url("files/img/' + artwork.media[m] + '")';
            thumbnail.onclick = function () {
                img.src = imgSrc;
            }
            imageSwitcher.appendChild(thumbnail);
        }
        imageSwitcher.appendChild(imageRight);
        imageSwitcher.children[1].click();

        artworkImgSection.appendChild(image);
        artworkImgSection.appendChild(imageSwitcher);

        gallery.appendChild(artworkImgSection);
    }
    {
        var artworkDescriptionSection = document.createElement("DIV");
        artworkDescriptionSection.className = "col single artworkDescription";

        var title = document.createElement("H2");
        title.innerHTML = artwork.title;

        var desc = document.createElement("P");
        desc.innerHTML = artwork.desc;


        artworkDescriptionSection.appendChild(title);
        artworkDescriptionSection.appendChild(desc);

        gallery.appendChild(artworkDescriptionSection);
        
    }

    {

        var toolsSection = document.createElement("DIV");
        toolsSection.className = "col artworkTools";
        toolsSection.innerHTML = "<h3>Tools Used</h3>";
        
        for(let i = 0; i < artwork.tools.length; i++ ){
            console.log(artwork.tools[i]);
            toolsSection.appendChild(renderToolBox(artwork.tools[i],true));
        }

        gallery.appendChild(toolsSection);


    }
    {
        var detailsSection = document.createElement("DIV");
        detailsSection.className = "col artworkDetails";
        detailsSection.innerHTML = "<h3>Description of Original Artwork</h3>";
        var row = function createTableRow(head, value){
            var r = document.createElement("TR");
            var th = document.createElement("TH");
            th.innerHTML = head;
            var td = document.createElement("TD");
            td.innerHTML = value;
            r.appendChild(th);
            r.appendChild(td);
            return r;
        }
        var table = document.createElement("TABLE");
        table.appendChild(row("Medium", "Pencil on Paper" ));
        table.appendChild(row("Size", artwork.size));
        table.appendChild(row("Time Taken", artwork.time));
        table.appendChild(row("Country of Origin", "India"));

        detailsSection.appendChild(table);
        gallery.appendChild(detailsSection);
    }
    

    window.location.href = "#galleryViewer"
}

function generateGalleryPage() {

    let gallery = document.getElementById("gallery");

    for (const artwork in artworks) {
        gallery.appendChild(renderArtworkFrame(artworks[artwork]));
    }

}


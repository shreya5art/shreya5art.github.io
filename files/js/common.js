var icons = {
    search: "fa-solid fa-magnifying-glass",
    cart: "icon-shopping-cart",
    star_fill: "icon-star-full",
    star_half: "icon-star-half",
    star_empty: "icon-star-empty",

    menu: "icon-bars",

    sun: "icon-cloud-sun-rain",
    moon: "icon-cloud-moon",

    filter: "icon-filter",
    sort: "icon-sort-amount-asc",

    facebook: "icon-facebook-square",
    instagram: "icon-instagram",
    twitter: "icon-twitter",
    youtube: "icon-youtube-play",
    telegram: "icon-telegram",

    paypal: "icon-paypal",
    upi: { code: '<span class="icon-UPI-Color"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span></span>' },
    creditCard: "icon-credit-card",
    wallet: "icon-wallet",

}

var customBasePrice = 1500;

var sizes = {
    A4: { name: "A4", size: [(8 + 1 / 4), (11 + 3 / 4)] , print: 100,},
    A5: { name: "A5", size : [(5 + 7 / 8), (8 + 1 / 4)] , print: 100, },
   
    A3: { name: "A3", size: [(11 + 3 / 4), (16 + 1 / 2)], print: 100, },
    A2: { name: "A2", size: [(16 + 1 / 2), (23 + 3 / 8)], print: 100,},
    _9x12: { name: "9x12″", size: [(9), (12)], print: 100, },
    _11x14: { name: "11x14″", size: [(11), (14)], print: 100,},
}

var surfaces = {
    "Paper" : { name: "Paper" },
}
var bgs = {
    NoBg : { name : "No Background" , custom: 0, },
    "Same as Picture" : {name: "Same as Picture", custom: 0 },
    "Bokeh" : {name: "Bokeh", custom: 500},
    "Custom" : {name: "Custom Upload", custom: 500},
}
var faces = {
    One : {name: "Single Face", custom: 1, },
    Couple : {name: "Couple", custom: 1.15 },
    Family: {name: "Family", custom: 1.3 },
    Group: {name: "Group", custom: 1.5 },
}
var mediums = {
    "Graphite Pencil": { name: "Graphite Pencil", custom: 1 },
    "Charcoal": { name: "Charcoal + Graphite", custom: 1.15 },
    "Color Pencil": { name: "Color Pencil" , custom: 1.3 },
    "Mix": { name: "Mix Media" , custom: 1.75},
    
}


var printSurface = {
    "glossy200" : { name: "Glossy Paper 200GSM", print: 1, },
    "matte200" : { name: "Matte Paper 200GSM", print: 1, },
}
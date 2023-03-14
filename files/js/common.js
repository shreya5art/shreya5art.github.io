var customBasePrice = 1500;

var sizes = {
    A4: { name: "A4", size: [(8 + 1 / 4), (11 + 3 / 4)]},
    A5: { name: "A5", size : [(5 + 7 / 8), (8 + 1 / 4)]},
   
    A3: { name: "A3", size: [(11 + 3 / 4), (16 + 1 / 2)] },
    A2: { name: "A2", size: [(16 + 1 / 2), (23 + 3 / 8)]},
    _9x12: { name: "9x12″", size: [(9), (12)]},
    _11x14: { name: "11x14″", size: [(11), (14)]},
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
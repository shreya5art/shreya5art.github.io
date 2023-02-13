

function priceCalculator(form){
    var formData = new FormData(form);
    var size = formData.get("size");
    var medium = formData.get("medium");
    var face = formData.get("face");
    var bg = formData.get("background");
    var frame = formData.get("frame");

    var bgPrice = 500;
    var framePrice = 500;  

    if(bg == "noBg") bgPrice = 0;
    if(frame == "noFrame") framePrice = 0;

    const sizeMap = new Map();
    sizeMap.set("A2", [ (16 + 1/2), ( 23 + 3/8) ]);
    sizeMap.set("A3", [ (11 + 3/4), ( 16 + 1/2) ]);
    sizeMap.set("11x14", [ (11), ( 14) ]);
    sizeMap.set("9x12", [ (9), ( 12) ]);
    sizeMap.set("A4", [ (8 + 1/4), ( 11 + 3/4) ]);
    sizeMap.set("A5", [ (5 + 7/8), ( 8 + 1/4) ]);

    const priceMap = new Map();
    priceMap.set("graphite",1);
    priceMap.set("color", 1.3);
    priceMap.set("mix", 1.75);
    priceMap.set("single", 1);
    priceMap.set("couple", 1.15);
    priceMap.set("family", 1.3);
    priceMap.set("group", 1.5);

    var price = 0, basePrice = 1500, baseSize = sizeMap.get("A5")[0] * sizeMap.get("A5")[1];
    var orderWidth = sizeMap.get(size)[0];
    var orderHeight = sizeMap.get(size)[1]; 
    var size = sizeMap.get(size)[0] * sizeMap.get(size)[1];
    price = (((basePrice+ (bgPrice + framePrice)) * (size / baseSize))) * priceMap.get(medium) * priceMap.get(face) ;  ;

    price = Math.round(Math.ceil(price/500)) * 500;
    

    var estimate = form.getElementsByClassName("estimatedPrice")[0];
    var width = form.getElementsByClassName("orderWidth")[0];
    var height = form.getElementsByClassName("orderHeight")[0];
    estimate.innerHTML = price;

    width.innerHTML = orderWidth + "inch";
    height.innerHTML = orderHeight + "inch";

}
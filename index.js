let container = document.getElementById('conTainer');
let btnDM = document.getElementById('btnDarkMode');

function dayAndNight()
{
    if(btnDM.innerHTML == "Light Mode")
    {
        btnDM.innerHTML = "Dark Mode";
        container.style.backgroundColor ="white";
        container.style.color = "black";
    }
    else
    {
        btnDM.innerHTML = 'Light Mode';
        container.style.backgroundColor ="black";
        container.style.color = "white";
    }
}


let btn = document.getElementById("btnContent1");
let para = document.getElementById("paragraph1");

function readMoreLess()
{
    if (btn.innerHTML == "Read More")
    {
        btn.innerHTML = "Show Less";
        para.innerHTML =" Our inventory includes lab-grown emeralds, rubies, sapphires, padparadschas, alexandrites, diamonds and opals, and more, as well as semi-precious stones. We take pride in sourcing precisely what our clients imagine for their fine jewellery designs and collections."
    }
    else{
        btn.innerHTML = "Read More";
        para.innerHTML = para.innerHTML.substring(0, 90);
    }
}

// Function for the second service card
let btn2 = document.getElementById("btnContent2");
let para2 = document.getElementById("paragraph2");

function readMoreLess2() {
    if (btn2.innerHTML == "Read More") {
        btn2.innerHTML = "Show Less";
        para2.innerHTML = "At BIRON, we have our own stone-cutting factory that provides a complete spectrum of lapidary services, from cutting gems from roughs and cutting enhancement through to gemstone drilling and trimming.";
    } else {
        btn2.innerHTML = "Read More";
        para2.innerHTML = para2.innerHTML.substring(0, 93);
    }
}

let Bespoke_btn = document.getElementById("Bespoke-btn");
let Bespoke_para = document.getElementById("Bespoke-para");

function BespokeMoreLess()
{
    if (Bespoke_btn.innerHTML == "Read More")
    {
        Bespoke_btn.innerHTML = "Show Less";
        Bespoke_para.innerHTML =" Our in-house experts can help you design the most beautiful fine jewellery settings for your spectacular BIRON® gems. We also offer practical introductions on gemstone setting, which can help you identify the application methods most relevant to your piece."
    }
    else{
        Bespoke_btn.innerHTML = "Read More";
        Bespoke_para.innerHTML = Bespoke_para.innerHTML.substring(0, 94);
    }
}

let Delivery_btn = document.getElementById("Delivery-btnContent");
let Delivery_para = document.getElementById("Delivery-paragraph");

function DeliveryMoreLess()
{
    if (Delivery_btn.innerHTML == "Read More")
    {
        Delivery_btn.innerHTML = "Show Less";
        Delivery_para.innerHTML =" Our team is always ready to discuss and manage realistic timelines for production and delivery according to your needs. Every effort will be made to comply with your desired schedule to facilitate a smooth and reliable production process. We also offer the convenience of flexibility, including piece by piece, partial delivery of lots, or in bulk."
    }
    else{
        Delivery_btn.innerHTML = "Read More";
        Delivery_para.innerHTML = Delivery_para.innerHTML.substring(0, 95);
    }
}
const { default: axios } = require("axios");
const { log, count } = require("console")
const { JSDOM } = require('jsdom');
const { raw } = require("./Raw");
const { gHtml, getProdoData, search, stringTOhtml } = require("./html");
let raw_dup = raw;
const fs = require("fs");
const { getInfo } = require("./input");
const sections = [];
const expess = require("express");
const app = expess();
const path = require("path");




const MainFolder = "../DB/";
const MainFolderImgs = MainFolder + "Images/";
const Cards = MainFolderImgs + "Cards/";
const Pack = MainFolderImgs + "Packs/";

let br = 0;


(() => {
    try {
        fs.mkdirSync(MainFolder)
    } catch (error) {
        
    }

    try {
        fs.mkdirSync(MainFolderImgs)
    } catch (error) {
        
    }

    try {
        fs.mkdirSync(Cards)
    } catch (error) {

    }

    try {
        fs.mkdirSync(Pack)
    } catch (error) {

    }

})()

do {
    br++
    const searched = search(raw_dup, "<section", "</section>");


    if (searched[1] == -1 || searched[2] == -1) {
        break
    }
    sections.push(searched[0])
    raw_dup = raw_dup.slice(raw_dup.indexOf("</section>") + "</section>".length);

    // sections.push(search(raw_dup, "<section", "</section>"))
    // raw_dup = search(raw_dup, "</section>", undefined);
} while (br < 10000);

const manifiest = {};

for (let i = 0; i < sections.length; i++) {

    // console.log("-------------------------------------------------");
    // console.log(sections[i]);
    // console.log("-------------------------------------------------");

    let dom = new JSDOM(sections[i]);
    dom = dom.window.document;
    const ul = dom.querySelector("ul");
    const li = dom.querySelectorAll("li");
    const setData = [];
    for (let i = 0; i < li.length; i++) {



        const a = li[i].querySelector("a");
        const img = li[i].querySelector("img");
        let proto_A
        let proto_IMG
        const protoData = {}
        if (a) {
            proto_A = getProdoData(a);
            protoData.href = proto_A.href
        }

        if (img) {
            proto_IMG = getProdoData(img);
            protoData.src = proto_IMG.src
            protoData.alt = proto_IMG.alt
        }





        if (protoData.href && protoData.src && protoData.alt) {
            setData.push(protoData)
        }


    }


    switch (i) {
        case 0:
            manifiest["main_box"] = setData;
            break;

        case 1:
            manifiest["mini_box"] = setData;
            break;


        case 2:
            manifiest["structure_deck"] = setData;
            break;
    }



}

const GET_CARD_IMG = async(card, toSave) => {
    const query = "yugioh_duel_links_" + card;
    const url = `https://www.bing.com/images/search?q=${query}&qs=n&form=QBIR&sp=-1&lq=0&pq=${query}&sc=10-6&cvid=4DFAC9330B0E41E8B743AE0F0A1EE6BB&ghsh=0&ghacc=0&first=1`;

    const res = (await (axios.get(url))).data


    try {
        fs.mkdirSync(toSave + card + "/")
    } catch (error) {

    }



    // mimg
    const text = search(res, '<div id="vm_c">', 'id="fbdialog_title"');
    const dom = stringTOhtml(text).window.document;
    let content = dom.querySelectorAll("ul");
    const final = [];
    for (let i = 1; i < content.length; i++) {
        try {
            const links = content[i].querySelectorAll("li");
            for (let j = 0; j < 8; j++) {
                if (links[j] != undefined) {
                    final.push(links[j])
                }
            }
        } catch (error) {

        }

    }







    const urls = [];
    for (let i = 0; i < final.length; i++) {
        try {
            const img = final[i].getElementsByClassName("mimg");

            if (img.length != 0) {

                let url = img[0].src;
                let toDelete = [search(url, 'w=', "&c")[1], search(url, 'w=', "&c")[2] + 1];
                toDelete = url.substring(toDelete[0], toDelete[1]);
                url = url.replace(toDelete, "");
                urls.push(url)


                const output = toSave + card + "/" + card + "_" + i + ".png";
                await downloadImage(url, output);

            }


        } catch (error) {

        }

    }


    return urls




}


async function downloadImage(url, outputPath) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });

        // Escribe la imagen en el archivo
        fs.writeFileSync(outputPath, response.data);
        console.log('Imagen descargada y guardada en', outputPath);
    } catch (error) {
        console.error('Error al descargar o guardar la imagen:', error);
    }
}


const getCards = async(pack) => {
    const BASE = "https://www.konami.com/yugioh/duel_links/en/box/";
    let resp = (await axios.get(BASE + pack.href)).data;
    resp = search(resp, '<section id="card-list"');
    resp = search(resp[0], undefined, '</section>');



    const dom = stringTOhtml(resp).window.document;
    let content = dom.querySelectorAll("li");

    const cards = [];

    // content.length
    
    
    for (let i =0; i <content.length; i++) {
        const card = content[i];
        const card_data = {};
        card_data["name"] = card.querySelector("dt").textContent.replaceAll('"""', '"');
        card_data["name"] =   (card_data["name"].replaceAll(" The ", " the ")).replaceAll(" Of ", " of ")
        card_data["rarity"] = Array.from(card.querySelector("a").classList).filter(cl => cl.includes("rare"))[0].replace("rare-", "").toUpperCase();
        // card_data["description"] = await get_card_description(card_data["name"])
        const moredata = await get_card_description(card_data["name"] );
        card_data["fn"] = (card_data["name"].replaceAll('"', "")).replace(" ", "_");
        cards.push({...card_data, ...moredata})
    }

    for (let i = 0; i < cards.length; i++) {
        const ci = cards[i] ;
        try {
            downloadImage(ci.img, Cards + ci.fn + ".png")
        } catch (error) {
            console.log(error);
            
        }
        
    }
    
    fs.writeFileSync(MainFolderImgs + "manifiest.json", JSON.stringify(cards))

}



const getIndex = (word, txt, stopIn) => {
    let index = 0;
    let counter = 0;

    do {
        index = txt.indexOf(word);
        txt = txt.slice(index);
        counter++
        if (counter == stopIn || index == -1) {
            break
        }
    } while (true);

    return [index, txt]
}





const get_card_description = async(cardName) => {

    cardName = cardName.replaceAll(" ", "_");
    const base = `https://yugioh.fandom.com/wiki/${cardName}`


    // const base = `https://www.google.com/search?q=${cardName}+description&sca_esv=981a0d32bcbf9b3f&hl=es&sxsrf=ADLYWIKz_sD6vJukefLRfl3iz0iEBHGybQ%3A1722871989272&ei=tfCwZseoEIHx1sQPiJOygQM&ved=0ahUKEwiH16enlt6HAxWBuJUCHYiJLDAQ4dUDCBA&uact=5&oq=Infernoble+Arms+-+Joyeuse+description&gs_lp=Egxnd3Mtd2l6LXNlcnAiJUluZmVybm9ibGUgQXJtcyAtIEpveWV1c2UgZGVzY3JpcHRpb25I4gNQAFgAcAB4AJABAJgBlAGgAZQBqgEDMC4xuAEDyAEA-AEC-AEBmAIAoAIAmAMAkgcAoAdZ&sclient=gws-wiz-serp`;
    try {
        const response = (await axios.get(base)).data;
        // let text = response.slice(response.indexOf('<table class="cardtable">'));
    
        const dom = stringTOhtml(response).window.document;
        let cardImage = dom.getElementsByClassName("cardtable-cardimage")[0].querySelector("img").src;
        cardImage = cardImage.replace(cardImage.substring(cardImage.indexOf("scale-to-width-down") ,cardImage.indexOf("?")  ), "");
        
  
        
        const rows = dom.getElementsByClassName("cardtablerow");
        const cardData = {
            img : cardImage
        };
        let toSearch = ["Card type", 'Property', 'English', "Attribute",
            "Types",
            "Level",
            "ATK",
            "Link Arrows",
            'Pendulum Scale',
            "Rank"
        ];
        let rows_usefull = [];
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
    
    
            for (let j = 0; j < toSearch.length; j++) {
                if (row.outerHTML.includes(toSearch[j])) {
                    rows_usefull.push([row, toSearch[j]])
                    break;
                }
    
            }
    
        }
    
    
    
    
    
        for (let i = 0; i < rows_usefull.length; i++) {
            let row = rows_usefull[i][0].textContent;
    
            if (row.includes("English") && !row.includes("TCG sets")) {
    
    
                const lang_break = [
                    "French",
                    "German",
                    "Italian",
                    "Portuguese",
                    "Spanish",
                    "Japanese",
                    "Korean",
    
                ]
    
                const indexs = [row.indexOf("English"), (() => {
                    let end_index = -1;
                    for (let k = 0; k < lang_break.length; k++) {
                        end_index = row.indexOf(lang_break[k]);
                        if (end_index != -1) {
                            end_index -= lang_break[k].length
                            break
                        }
    
                    }
                    return end_index
                })()];
    
    
    
                if (!cardData["description"]) {
                    cardData["description"] = row.slice(indexs[0], indexs[1]).replace("English", "").trim();
                }
    
            } else if (!row.includes("TCG sets")) {
                switch (rows_usefull[i][1]) {
                    case "Card type":
                        cardData["type"] = row.replace("Card type", "").trim();
                        break;
    
    
                    case "Property":
                        cardData["types"] = row.replace("Property", "").trim();
                        break;
                    case "Pendulum Scale":
                        cardData["pendulum_scale"] = parseInt(row.replace("Pendulum Scale", "").trim());
                        break;
    
    
                    case "Attribute":
                    if(cardData["attibute"] == undefined){
                        cardData["attibute"] = row.replace("Attribute", "").trim();
                    }
                        break;
    
    
                    case "Types":
                        cardData["types"] = (row.replace("Types", "").trim()).split("/");
                        break;
    
                        case "Rank":
                    case "Level":
                       if(cardData["level"] == undefined && !row.includes("Materials")){
                 
                        
                        cardData["level"] = parseInt(row.replace(/\D/g, ""));
                       }
                        break;
    
                    case "ATK":
                    if(cardData["stats"] == undefined){
                        cardData["stats"] = ((row.replace("ATK", "").trim()).split("/").map(val => {
                            val = val.replace(/\D/g, "");
                            return parseInt(val)
                        })).filter(val => !isNaN(val));
                    }
                        break;
    
    
                    case "Link Arrows":
                        cardData["link_arrows"] = row.replace("Link Arrows", "").trim();
                        break;
    
                }
    
    
    
    
            }
    
    
    
    
        }
    
    
    
        return cardData
    
    } catch (error) {

console.log(error);

        return {}
        // console.log(cardName);
        // if(error.response.status != 404){
   
            
        //     console.log(error);
            
        // }

        
        
           
    }




}




// console.log(manifiest['main_box'][1]);

// getCards(manifiest['main_box'][0]);


// Configura el directorio donde se encuentran los archivos estáticos
const staticDir = path.join(__dirname, 'public');

// Sirve archivos estáticos desde el directorio especificado
app.use(expess.static(staticDir));

// Ruta por defecto para el servidor
app.get('/', (req, res) => {
    res.sendFile(path.join(staticDir, 'index.html'));
});




app.listen(3000, () => {
    console.log("http://localhost:3000/");

})




getCards(manifiest["main_box"][0])
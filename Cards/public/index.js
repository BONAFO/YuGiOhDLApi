(() => {
    let cardName = "Chirubimé, Princess of Autumn Leaves";
    cardName = cardName.replaceAll(" ", "+");
    const base = `https://www.google.com/search?q=${cardName}+description&sca_esv=981a0d32bcbf9b3f&hl=es&sxsrf=ADLYWIKz_sD6vJukefLRfl3iz0iEBHGybQ%3A1722871989272&ei=tfCwZseoEIHx1sQPiJOygQM&ved=0ahUKEwiH16enlt6HAxWBuJUCHYiJLDAQ4dUDCBA&uact=5&oq=Infernoble+Arms+-+Joyeuse+description&gs_lp=Egxnd3Mtd2l6LXNlcnAiJUluZmVybm9ibGUgQXJtcyAtIEpveWV1c2UgZGVzY3JpcHRpb25I4gNQAFgAcAB4AJABAJgBlAGgAZQBqgEDMC4xuAEDyAEA-AEC-AEBmAIAoAIAmAMAkgcAoAdZ&sclient=gws-wiz-serp`;

    window.open(base, '_blank');

})()
function getEvents() {
    const eventsSelectedlist = [];
    for (let i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].event === 'xhr response' && (dataLayer[i].requestBody != null && dataLayer[i].requestBody != undefined)) {
            eventsSelectedlist.push(dataLayer[i]);
        };
    };
    console.log(eventsSelectedlist);
};
getEvents();
function getEvents() {
    const EventsSelectedlist = []
    for (let i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].event === 'xhr response' && (dataLayer[i].requestBody != null && dataLayer[i].requestBody != undefined)) {
            EventsSelectedlist.push(dataLayer[i])
        }
    }
    console.log(EventsSelectedlist);
}

getEvents()
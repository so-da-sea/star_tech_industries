class Event{

//    eventTitle;
//    eventLocation;
//    eventMonth;
//    eventDay;
//    eventStart;
//    eventEnd;
//    fullEvent;

    constructor(eventT, eventL,  eventM,  eventD,  eventST,  eventET) {
    this.eventTitle = eventT;
    this.eventLocation = eventL;
    this.eventMonth = eventM;
    this.eventDay = eventD;
    this.eventStart = eventST;
    this.eventEnd = eventET;
    this.fullEventFunc(eventTitle,eventLocation,eventMonth,eventDay,eventStart,eventEnd);
    }

     setEventTitle(eventT) {
         this.eventTitle = eventT;
     }

    // static getEventTitle(){
    //     return eventTitle;
    // }
    //
    // static setEventLocation(eventL){
    //     eventLocation= eventL;
    // }
    //
    //
    // static getEventLocation(){
    //     return eventLocation;
    // }
    //
    // static setEventMonth(eventM){
    //     eventMonth= eventM;
    // }
    //
    // static getEventMonth(){
    //     return eventMonth;
    // }
    //
    // static setEventDay(eventD){
    //     eventDay= eventD;
    // }
    //
    // getEventDay(){
    //     return eventDay;
    // }
    //
    // static setEventStart(eventST){
    //     eventStart= eventST;
    // }
    //
    // static getEventStart(){
    //     return eventStart;
    // }
    //
    // static setEventEnd(eventET){
    //     eventStart= eventET;
    // }
    //
    // static getEventEnd(){
    //     return eventEnd;
    // }
    // getFullEvent(){
    //     return fullEvent;
    // }

    fullEventFunc(eventT, eventL,  eventM,  eventD,  eventST,  eventET){
        this.fullEvent= eventT + "\n" + eventL + "\n" + eventM + " " + eventD + "\n" + eventST + "-" + eventET;
    }

}
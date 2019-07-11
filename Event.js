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
    }

     setEventTitle(eventT) {
         this.eventTitle = eventT;
     }

     getEventMonthObject(){
         var monthObj;
         for(var i = 0; i<12; i++){
             if(monthArray[i].monthName==this.eventMonth){
                 monthObj = monthArray[i];
             }
         }
         return monthObj;
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
    getEventStart(){
      return eventStart;
    }
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

    get fullEvent(){
        return "<br>" + this.eventTitle + "<br>" + this.eventLocation + "<br>" + this.eventStart + "-" + this.eventEnd;
        //"<br>" + this.eventMonth + " " + this.eventDay +
    }
    
    get eventAlert(){
        return "\n" + this.eventTitle + "\n" + this.eventLocation + "\n" + this.eventMonth + " " + this.eventDay + "\n" + this.eventStart + "-" + this.eventEnd + "\n";
    }

}
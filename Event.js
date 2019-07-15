class Event{

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

    getEventStart(){
      return eventStart;
    }

    get fullEvent(){
        return "<br>" + this.eventTitle + "<br>" + this.eventLocation + "<br>" + this.eventStart + "-" + this.eventEnd;
        //"<br>" + this.eventMonth + " " + this.eventDay +
    }
    
    get eventAlert(){
        return this.eventTitle + "\n" + this.eventLocation + "\n" + this.eventMonth + " " + this.eventDay + "\n" + this.eventStart + "-" + this.eventEnd + "\n";
    }

}
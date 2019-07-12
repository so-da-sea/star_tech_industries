//numDays
//monthName
//index

class Month {
    // numDays = 0;
    // monthName = "";
    // index = 0;
    // startingIndex = 0;
    // eventsForMonth = [];

//    numDays = 0;
//    monthName = "";
//    index = 0;
//    eventsForMonth = [];

    constructor(numD, monthN, inD, numW) {
        this.eventsForMonth = [];
        this.numDays = numD;
        this.monthName = monthN;
        this.index = inD;
        this.numWeeks = 4;
        this.numWeeks = numW;
        this.startingIndex = this.getStartingIndex();
        this.setEventsForMonthToBlank();
    }

    getStartingIndex(){
        var monthNameLowerCase = this.monthName.toLowerCase();
        if(monthNameLowerCase=='march' || monthNameLowerCase=='november'){
            this.startingIndex=1;  }
        if(monthNameLowerCase=='june'){
            this.startingIndex=2;  }
        if(monthNameLowerCase=='september' || monthNameLowerCase=='december'){
            this.startingIndex=3;  }
        if(monthNameLowerCase=='january' || monthNameLowerCase=='april' || monthNameLowerCase=='july'){
            this.startingIndex=4;  }
        if(monthNameLowerCase=='october'){
            this.startingIndex=5;  }
        if(monthNameLowerCase=='may'){
            this.startingIndex=6;  }
        if(monthNameLowerCase=='february' || monthNameLowerCase=='august'){
            this.startingIndex=7;  }
        return this.startingIndex;
    }

    setEventsForMonthToBlank(){
        for(var i = 0; i<42;i++){
            this.eventsForMonth.push([]);
        }
    }

    getNumDays(){
        return this.numDays;
    }

    getMonthName(){
        return this.monthName;
    }
    //
    // static getEventTitle(){
    //     return eventTitle;
    // }
    //
    addNewEvent(event){
        var eventD = parseInt(event.eventDay);
        var monthN = event.getEventMonthObject();
        this.eventsForMonth[eventD-1].splice(getArrangedId(event),0,event);
        document.getElementById(eventD+this.startingIndex-1).addEventListener("click", function(){eventsTextShow(event.eventDay)});
    }

    getEventsArrayForDay(day){
        return this.eventsForMonth[day-1];
    }

    getFullEventsForDay(day){
        var fullEvents = "";
        for(var i = 0; i<this.getEventsArrayForDay(day).length;i++) {
            fullEvents += this.getEventsArrayForDay(day)[i].fullEvent + "<br>";
        }
    return fullEvents;
    }
    
    getFullEventsForDayEdit(day){
        var fullEvents = "";
        for(var i = 0; i<this.getEventsArrayForDay(day).length;i++) {
            fullEvents += (i+1) + ". " + this.getEventsArrayForDay(day)[i].eventAlert + "\n";
        }
    return fullEvents;
    }

    getEventTitlesForDay(day){
        var eventTitles = "";
        for(var i = 0; i<this.getEventsArrayForDay(day).length;i++){
            eventTitles += "<br>" + this.getEventsArrayForDay(day)[i].eventTitle;
        }
        return eventTitles;
    }

    getPreviousMonth(){
        var monthIndex = this.index;
        var previousMonthIndex = monthIndex-1;
        if(monthIndex == 1)
            previousMonthIndex = 12;
        return monthArray[previousMonthIndex-1];
    }

    getNextMonth(){
        var monthIndex = this.index;
        var nextMonthIndex = monthIndex+1;
        if(monthIndex == 12)
            nextMonthIndex = 1;
        return monthArray[nextMonthIndex-1];
    }

}


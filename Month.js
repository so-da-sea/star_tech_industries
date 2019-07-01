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

    constructor(numD, monthN, inD) {
        this.eventsForMonth = [];
        this.numDays = numD;
        this.monthName = monthN;
        this.index = inD;
        this.startingIndex = this.getStartingIndex();
        this.setEventsForMonthToBlank()
        //this.eventsForDay = [];
        //this.setEventsForDayToBlank()
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
        for(var i = 0; i<this.numDays;i++){
            this.eventsForMonth.push([]);
        }
    }

    // setEventsForDayToBlank(){
    //     for(var i = 0; i<6;i++) {
    //         this.eventsForDay.push([]); //change brackets to quotations
    //
    //     } }


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
    getIndexMonth(){
        return this.index;
    }
    getEventsForMonth(){
        return this.eventsForMonth;
    }
    addNewEvent(event){
        this.eventsForMonth[event.eventDay-1].push(event);
    }

    getFullEventsForDay(day){
        var fullEvents = "";
        for(var i = 0; i<this.eventsForMonth[day-1].length;i++) {
            fullEvents += this.eventsForMonth[day-1][i].fullEvent + "<br>";
        }
    return fullEvents;
    }

}


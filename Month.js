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
        for(var i = 0; i<42;i++){
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
        document.getElementById(event.eventDay).addEventListener("click", function(){eventsTextShow(event.eventDay)});
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


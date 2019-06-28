//numDays
//monthName
//index
class Month {

    numDays;
    monthName;
    index;
    eventsForMonth;

    constructor(numD, monthN, inD){
        this.numDays=numD;
        this.monthName=monthN;
        this.index=inD;
    }

    // static getNumDays(){
    //     return numDays;
    // }
    //
    getMonthName(){
        return monthName;
    }
    //
    // static getEventTitle(){
    //     return eventTitle;
    // }
    //
    // static getIndexMonth(){
    //     return index;
    // }
    addNewEvent(event){
        eventsForMonth[event.getEventDay()-1] = event;
    }

}

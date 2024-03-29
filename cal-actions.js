//TAB FUNCTIONS


/*
        let currentUserMatch = getUserId();
*/
        //var userId = getUserId();

        var client = new HttpClient();

        function openPage(pageName,elmnt,color) {
                //hide all elements with tabcontent by default
                var i,tabcontent,tablinks;
                tabcontent= document.getElementsByClassName("tabcontent");
                for(i=0;i<tabcontent.length;i++)
                    tabcontent[i].style.display="none";

                tablinks=document.getElementsByClassName("tablink");
                for(i=0;i<tablinks.length;i++)
                    tablinks[i].style.backgroundColor="";

                document.getElementById(pageName).style.display="block";
                elmnt.style.backgroundColor=color;
            }


        function openSubTab(pageName,elmnt,color){
                var i,tabcontent, tablinks;

                tabcontent=document.getElementsByClassName("tabcontentSubTab");
                for(i=0;i<tabcontent.length;i++)
                        tabcontent[i].style.display="none";

               tablinks=document.getElementsByClassName("tablinkSubTab");
                for(i=0;i<tablinks.length;i++)
                    tablinks[i].style.backgroundColor="";

                document.getElementById(pageName).style.display="block";
                elmnt.style.backgroundColor=color;
            }  

//MONTH FUNCTIONS
    var currentMonthIndex=0;

    var january= new Month(31, 'January', 1,);
    var february = new Month(29,'February',2);
    var march = new Month(31,'March',3);
    var april = new Month(30,'April',4);
    var  may = new Month(31,'May',5,5);
    var june = new Month(30,'June',6);
    var july = new Month(31,'July',7);
    var august = new Month(31,'August',8,5);
    var september = new Month(30,'September',9);
    var october = new Month(31,'October',10);
    var november = new Month(30,'November',11);
    var december = new Month(31,'December',12);



    var monthArray = new Array(january, february, march, april, may, june, july, august, september, october, november, december);

            function setUpMonth(month){//month being a month obj
                    setUpWeek(month,1);
                    // box.style.display = "none";
                    currentMonthIndex = month.index-1;
                    var startingIndex = month.startingIndex;
                    var endValue = 35;
                    var currentMonthName = monthArray[currentMonthIndex].monthName;
                    var day;

                    this.hideRow();
                    if(month.numWeeks==5){
                        this.showRow();
                        endValue = 42;
                    }

                    for(var i = 1; i<=endValue; i++){
                        document.getElementById(i).innerHTML="";
                        document.getElementById(i).style.backgroundColor="#e0e0e0";
                    }
                document.getElementById("heading").innerHTML = month.monthName.substring(0,1).toUpperCase() + month.monthName.substring(1).toLowerCase() + " 2020"
                var eventTitles="";
                var allEventsForMonth = [];
                client.get(getServiceBaseUrl()+"/event/all-events-for-month?id="+userId+"&month="+currentMonthName+"&from="+1+"&to="+month.numDays,
                    function(response){
                        allEventsForMonth = JSON.parse(response);
                    });
                    for(var i = startingIndex; i<(month.numDays + startingIndex); i++) {
                        eventTitles="";
                        day = (i-(startingIndex-1)).toString();
                        for (var j = 0; j<allEventsForMonth.length;j++){
                            if (day == allEventsForMonth[j].day){
                                eventTitles += "<br>" + allEventsForMonth[j].title;
                            }
                        }
                        document.getElementById(i).innerHTML += i - (startingIndex - 1) + eventTitles;
                        document.getElementById(i).style.backgroundColor="white";
                    }
                setWeekendColor();
                localStorage.setItem('monthToSet',month.index-1);
                // localStorage.setItem('monthlyOrWeekly','Monthly');
            }

            function moveForwardsThroughMonths(){
                if(currentMonthIndex==11)
                    setUpMonth(january);
                else
                    setUpMonth(monthArray[currentMonthIndex+1]);
                }

            function moveBackwardsThroughMonths(){
                if(currentMonthIndex==0)
                    setUpMonth(december);
                else
                    setUpMonth(monthArray[currentMonthIndex-1]);
                }

            function hideRow(){
                for (var i = 36; i<=42; i++){
                    document.getElementById(i).style.display = "none";
                }
                document.getElementsByClassName("calendar")[0].style.gridTemplateRows= "40px 90px 90px 90px 90px 90px";
            }

            function showRow(){
                for (var i = 36; i<=42; i++){
                    document.getElementById(i).style.display = "block";
                }
                document.getElementsByClassName("calendar")[0].style.gridTemplateRows= "40px 90px 90px 90px 90px 90px 90px";
            }

//WEEK FUNCTIONS

////?????!!!!! NEED TO REVIEW
var currentWeek = {m: january, w: 1};

           function setUpWeek(month,week){
                var startingIndex = month.startingIndex;
                var previousMonth = month.getPreviousMonth();
                var eventTitles = "";
                var eventsArray = [];
                var day;


               currentWeek = {m: month, w: week};

               for(var i = 0; i<7; i++){
                    document.getElementById(i+43).innerHTML = "";
                    document.getElementById(i+43).style.backgroundColor = "white";
                }

               if(month==january && week==1){
                   for (var i=startingIndex-1; i>0; i--){
                       document.getElementById(i+42).style.backgroundColor = "#e0e0e0";
                   }
                   for (var i=startingIndex-1; i<7; i++){
                       day=i-startingIndex+1;
                       //e = month.getFullEventsForDay(i-startingIndex+2);
                       day = i-(startingIndex-2);
                       e = getEventTextForDay(month.monthName,day);
                       document.getElementById(i+43).innerHTML += day + e;
                   }
               }
               else if(month==december && week==5){
                   for (var i=startingIndex-1; i>0; i--){
                       //e = month.getFullEventsForDay((startingIndex)-i);
                       e = getEventTextForDay(previousMonth.monthName,previousMonth.numDays-((startingIndex-1)-i));
                       document.getElementById(i+42).innerHTML += previousMonth.numDays-((startingIndex-1)-i) + e;
                   }
                   for (var i=startingIndex-1; i<7; i++){
                       document.getElementById(i+43).style.backgroundColor = "#e0e0e0";
                   }
               }

                else if(week == 1){
                    for (var i=startingIndex-1; i>0; i--){
                        //e = previousMonth.getFullEventsForDay(previousMonth.numDays-((startingIndex-1)-i));
                        e = getEventTextForDay(previousMonth.monthName,previousMonth.numDays-((startingIndex-1)-i));
                        document.getElementById(i+42).innerHTML += previousMonth.numDays-((startingIndex-1)-i)+e;
                        document.getElementById(i+42).style.backgroundColor = "#e0e0e0";
                    }
                    e = "";
                    for (var i=startingIndex-1; i<7; i++){
                        //e = month.getFullEventsForDay(i-startingIndex+2);
                        e = getEventTextForDay(month.monthName,(i-(startingIndex-2)));
                        document.getElementById(i+43).innerHTML += (i-(startingIndex-2)) + e;
                    }
                }
                else{
                    for (var i = 1; i<=7; i++) {
                        //e = month.getFullEventsForDay(7*(week-1)+i-startingIndex+1);
                        e = getEventTextForDay(month.monthName, (7*(week-1)+i-startingIndex+1));
                        document.getElementById(i+42).innerHTML += (7*(week-1)+i-startingIndex+1) + e;
                    }
                }

                document.getElementById("weekHeader").innerHTML = month.monthName + " 2020";
               // localStorage.setItem('monthlyOrWeekly','Weekly');
               setWeekendColor();
           }

           function getEventTextForDay(monthName,day){
               var eventsArray = [];
               var fullEvents = "";
               client.get(getServiceBaseUrl() + 'event/events-for-user-day?id=' + userId + '&month=' + monthName + '&day=' + day, function(response) {
                   eventsArray = JSON.parse(response);
               });
               for (var i = 0; i<eventsArray.length; i++){
                   fullEvents += "<br>" + eventsArray[i].title + "<br>" + eventsArray[i].location + "<br>" + eventsArray[i].startTime + "-" + eventsArray[i].endTime + "<br>";
               }
               return fullEvents;
           }

            function moveBackwardsThroughWeeks(){
               var currentM = currentWeek.m;
               var currentW = currentWeek.w;
               var newM;
               var newW;
               if(currentW==1){
                   newM = currentM.getPreviousMonth();
                   if(currentM.getPreviousMonth().numWeeks==5)
                       newW = 5;
                   else
                       newW = 4;
               }
               else{
                   newM = currentM;
                   newW = currentW-1;
               }
               setUpWeek(newM,newW);
            }

            function moveForwardsThroughWeeks(){
                var currentM = currentWeek.m;
                var currentW = currentWeek.w;
                var newM;
                var newW;
                if((currentW==4 && currentM.numWeeks!=5) || currentW==5){
                    newM = currentM.getNextMonth();
                    newW = 1;
                }
                else{
                    newM = currentM;
                    newW = currentW+1;
                }
                setUpWeek(newM, newW);
            }


//EVENT FUNCTIONS  

    var fullEvent="";
    var eventTitle="";
    var eventLocation="";
    var eventDay="";
    var eventMonth="";
    var eventStart="";
    var eventEnd= "";
    var eventAlert=""; 

            function infoEvent(){

                eventAlert="";
                var monthN;


                eventTitle= window.prompt("Title of Event: ", "Meeting").trim();
                if (eventTitle!= "" && eventTitle!= null){
                    fullEvent+=eventTitle;
                    eventAlert+= eventTitle;

                }
                eventLocation= window.prompt("Location of Event: ", "Holy Names Academy").trim();
                if (eventLocation!="" && eventLocation!=null){
                    fullEvent+= "<br>" + eventLocation;
                    eventAlert+= "\n" + eventLocation
                }
                eventMonth= (window.prompt ("Month of the Event: ", monthArray[currentMonthIndex].monthName)).trim();
                if (eventMonth != "" && eventMonth!=null){
                    fullEvent+="<br>" + eventMonth + " ";
                    eventAlert+="\n" + eventMonth + " ";
                }
                else{
                    eventMonth = (window.prompt("Please enter the month of the event: ", monthArray[currentMonthIndex].monthName)).trim();
                    fullEvent+="<br>" + eventMonth + " ";
                    eventAlert+="\n" + eventMonth + " ";
                }
                for(var i = 0; i<12; i++){
                    if(eventMonth.toLowerCase()==monthArray[i].monthName.toLowerCase())
                        monthN = monthArray[i];
                }

                eventDay = window.prompt ("Day of the Event: ", "1").trim();
                if (eventDay != "" && eventDay!=null){
                    fullEvent+=eventDay;
                    eventAlert+=eventDay;
                }
                else {
                    eventDay = window.prompt("Please enter the day of the event: ", "1").trim();
                    fullEvent += eventDay;
                    eventAlert += eventDay;
                }
                eventDay= eventDay.toString();

                eventStart= window.prompt("Start Time: ", "9:00am").trim();
                if (eventStart!="" && eventStart!=null){
                    fullEvent+="<br>" + eventStart + "-";
                    eventAlert+="\n" + eventStart + "-";
                }
                eventEnd= window.prompt("End Time: ", "10:00am").trim();

                if (eventEnd!="" && eventEnd!=null){
                    fullEvent+= eventEnd+"<br><br>";
                    eventAlert+= eventEnd;
                }

                window.alert(eventAlert);
                //var eventN = new Event(eventTitle,eventLocation,eventMonth,eventDay,eventStart,eventEnd);
                //monthN.addNewEvent(eventN);
                var weekNum = parseInt((parseInt(eventDay)+monthN.startingIndex-2)/7+1);
                if(weekNum==5 && monthN.numWeeks!=5||weekNum==6)
                    setUpWeek(monthN.getNextMonth(),1);
                else
                    setUpWeek(monthN,weekNum);

                //should add event to db
                client.post(getServiceBaseUrl() + 'event/create',JSON.stringify(
                    {userID:userId,
                            title:eventTitle,
                            location:eventLocation,
                            month:eventMonth,
                            day:eventDay,
                            startTime:eventStart,
                            endTime:eventEnd}),
                    function(response){
                        console.log(response);
                        window.location.reload();
                    });
                var calID = parseInt(eventDay)+monthArray[currentMonthIndex].startingIndex-1;
                setUpMonth(monthN);
            }



//LIST FUNCTIONS

         // Create a "close" button and append it to each list item
//        var myNodelist = document.getElementById("myUL").getElementsByTagName("LI");
//        for (var i = 0; i < myNodelist.length; i++) {
//            var span = document.createElement("SPAN");
//            var txt = document.createTextNode("\u00D7");
//            span.className = "close";
//            span.appendChild(txt);
//            myNodelist[i].appendChild(span);

        // Click on a close button to hide the current list item
        var close = document.getElementById("myUL").getElementsByClassName("close");
        // for (var i = 0; i < close.length; i++) {
        //     close[i].onclick = function() {
        //         var div = this.parentElement;
        //         div.style.display = "none";
        //     }
        // }

         // Add a "checked" symbol when clicking on a list item
        var list = document.getElementById("myUL");
        list.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
                var inner = ev.target.innerText.substring(0,ev.target.innerText.length-1);
                ev.target.classList.toggle('checked');
                var i = document.createElement("i");
                var attribute = document.createAttribute("class");
                attribute.value = "fa fa-check";
                i.setAttributeNode(attribute);
                ev.target.prepend(i);
                if(ev.target.classList.length>0) {
                    ev.target.style.cssText = "padding: 12px 8px 12px 20px; background: #888; color: white;";
                }
                else {
                    ev.target.innerHTML = inner;
                    ev.target.style.cssText = "background: #eee; color: black; padding: 12px 8px 12px 44px";
                    var span = document.createElement("SPAN");
                    var txt = document.createTextNode("\u00D7");
                    span.className = "close";
                    span.appendChild(txt);
                    ev.target.appendChild(span);
            
                    var close = document.getElementById("myUL").getElementsByClassName("close");
                    for (var i = 0; i < close.length; i++) {
                        close[i].onclick = function() {
                          var div = this.parentElement;
                          div.style.display = "none";
                        }
                    }
                }
            }
        });

        // Create a new list item when clicking on the "Add" button
        function newElement() {
            var li = document.createElement("li");
            li.style.cssText = "padding: 12px 8px 12px 44px; " +
                                "background: #eee; " +
                                "fontSize: 18px; " +
                                "listStyleType: none; " +
                                "color: black;";
            var inputValue = document.getElementById("myInput").value;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            if (inputValue === '')
                alert("You must write something!");
            else {
                document.getElementById("myUL").appendChild(li);
            }
            document.getElementById("myInput").value = "";

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);
            
            var close = document.getElementById("myUL").getElementsByClassName("close");
            for (var i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                  var div = this.parentElement;
                  div.style.display = "none";
                }
            }
        }



function getFullEvent(event){
        return event.title + "<br>" + event.location + "<br>" + event.startTime + "-" + event.endTime;
}

//SCHEDULE

    let period1="";
    let period2="";
    let period3="";
    let period4="";
    let period5="";
    let period6="";
    let classOrder=[];
    let p1Room="";
    let p2Room="";
    let p3Room="";
    let p4Room="";
    let p5Room="";
    let p6Room="";
    let totalSteps=0;
    let totalFlights=0;

    function createSchedule(){
        classOrder=[];
        period1= window.prompt("Enter your first period", "AP Calculus").trim();
        if (period1!= null){
            classOrder.push(period1);
            document.getElementById("p1Teach").innerHTML= window.prompt("Enter your first period teacher", "Koon");
            p1Room= window.prompt("Enter your first period room", "312");
            document.getElementById("p1Room").innerHTML=p1Room;
        }

        period2= window.prompt("Enter your second period", "Physics").trim();
        if (period2!= null){
            classOrder.push(period2);
            document.getElementById("p2Teach").innerHTML= window.prompt("Enter your second period teacher", "Ryan");
            p2Room= window.prompt("Enter your second period room", "311");
            document.getElementById("p2Room").innerHTML=p2Room;
        }

        period3= window.prompt("Enter your third period", "AP English 12").trim();
        if (period3!= null){
            classOrder.push(period3);
            document.getElementById("p3Teach").innerHTML=window.prompt("Enter your third period teacher", "Merlino");
            p3Room=window.prompt("Enter your third period room", "407");
            p3Room=document.getElementById("p3Room").innerHTML=p3Room;
        }


        period4= window.prompt("Enter your fourth period", "Contempary Problems").trim();
        if (period4!= null){
            classOrder.push(period4);
            document.getElementById("p4Teach").innerHTML= window.prompt("Enter your fourth period teacher", "McGah");
            p4Room=window.prompt("Enter your fourth period room", "301");
            document.getElementById("p4Room").innerHTML= p4Room;
        }

        period5= window.prompt("Enter your fifth period", "US History/Goverment").trim();
        if (period5!= null){
            classOrder.push(period5);
            document.getElementById("p5Teach").innerHTML= window.prompt("Enter your fifth period teacher", "Harris");
            p5Room= window.prompt("Enter your fifth period room", "114");
            document.getElementById("p5Room").innerHTML= p5Room;
        }

        period6= window.prompt("Enter your sixth period", "AP Statistics").trim();
        if (period6!= null){
            classOrder.push(period6);
            document.getElementById("p6Teach").innerHTML= window.prompt("Enter your sixth period teacher", "Shope");
            p6Room= window.prompt("Enter your sixth period room", "310");
            document.getElementById("p6Room").innerHTML= p6Room;
        }

        for (var j=0; j< classOrder.length; j++){
            for (var i = 0; i<document.getElementsByClassName("p1").length;i++){
                document.getElementsByClassName("p" + (j+1))[i].innerHTML=classOrder[j];
            }}

    }

     function countSteps(){
                        p1Room=p1Room.substring(0,1);
                        p2Room=p2Room.substring(0,1);
                        p3Room=p3Room.substring(0,1);
                        p4Room=p4Room.substring(0,1);
                        p5Room=p5Room.substring(0,1);
                        p6Room=p6Room.substring(0,1);

                        var rooms= [p1Room, p2Room, p3Room, p4Room, p5Room, p6Room];

                        totalSteps+=(p1Room*26);

                        for (var i=0; i<rooms.length-1; i++){
                            totalSteps+= 26 * (Math.abs(rooms[i]-rooms[i+1]));
                        }
                        document.getElementById("daySteps").innerHTML= totalSteps;
                        document.getElementById("weekSteps").innerHTML= totalSteps*5;
                        document.getElementById("monthSteps").innerHTML= totalSteps*22;
                        document.getElementById("yearSteps").innerHTML= totalSteps*180;
         totalSteps=0;



                    }


function editEvent(){
    let editDay= window.prompt("Which day would you like to edit an event?", "1");
    let eventsForDayEdit = [];
    client.get(getServiceBaseUrl()+"event/events-for-user-day?id="+userId+"&month="+monthArray[currentMonthIndex].monthName+"&day="+editDay,
        function(){
            eventsForDayEdit = JSON.parse(response);
        });
    var eventsText = "";
    for (var i = 0; i<eventsForDayEdit.length;i++) {
        eventsText += eventsForDayEdit[i].title;
    }
    let editEvent = window.prompt(eventsText + "Which event would you like to edit?","1");
    monthArray[currentMonthIndex].eventsForMonth[editDay-1].splice(parseInt(editEvent-1),1);
    infoEvent();
    client.delete(getServiceBaseUrl() + "event/delete-event?id="+userId+"&month="+monthArray[currentMonthIndex].monthName+"&day="+editDay+"&eventIndex="+editEvent,
        function() {
            window.location.reload();
        });
}

function deleteEvent(){
    let currentMonthName = monthArray[currentMonthIndex].monthName;
    let deleteDay= window.prompt("Which day would you like to delete an event?", "1");
    //let eventsForDayDelete = monthArray[currentMonthIndex].getFullEventsForDayEdit(deleteDay);
    let eventsForDayDelete = [];
    client.get(getServiceBaseUrl()+"event/events-for-user-day?id="+userId+"&month="+monthArray[currentMonthIndex].monthName+"&day="+deleteDay,
        function(){
            eventsForDayDelete = JSON.parse(response);
        });
    var eventsText = "";
    for (var i = 0; i<eventsForDayDelete.length;i++){
        eventsText += eventsForDayDelete[i].title;
    }
    let deleteEvent = window.prompt(eventsText + "Which event would you like to delete?","1");
    client.delete(getServiceBaseUrl() + "event/delete-event?id="+userId+"&month="+currentMonthName+"&day="+deleteDay+"&eventIndex="+deleteEvent,
        function() {
            window.location.reload();
    });

    setUpMonth(monthArray[currentMonthIndex]);
    setUpWeek(currentWeek.m, currentWeek.w);
}

//NOT SURE

function setWeekendColor(){
    var startingIndex = monthArray[currentMonthIndex].startingIndex;
    var numDays = monthArray[currentMonthIndex].numDays;
    for (var i=monthArray[currentMonthIndex].startingIndex; i<=startingIndex+numDays-1; i++){
        if(i%7==0)
            document.getElementById(i).style.backgroundColor = "#f5f5f5";
        if((i-1)%7==0)
            document.getElementById(i).style.backgroundColor = "#f5f5f5";
    }
}

//ARRANGE EVENTS BY TIME FUNCTIONS

function getArrangedId(event){
    var eventsInDay = event.getEventMonthObject().getEventsArrayForDay(event.eventDay);

    var startTime = event.startTime;
    var hourThis = parseInt(extractHour(event));
    var minuteThis = parseInt(extractMinute(event));
    var ampmThis = extractAMPM(event);
    
    if(hourThis == 12)
            hourThis = 0;

    var startTimeOther;
    var hourOther;
    var minuteOther;
    var ampmOther;

    for(var i = 0; i<eventsInDay.length; i++){
        startTimeOther = eventsInDay[i].eventStart;
        hourOther = parseInt(extractHour(eventsInDay[i]));
        minuteOther = parseInt(extractMinute(eventsInDay[i]));
        ampmOther = extractAMPM(eventsInDay[i]);
        
        if(hourOther == 12)
            hourOther = 0;

        var toReturn;

        if(ampmThis==ampmOther) {
            if (hourThis <= hourOther && minuteThis <= minuteOther)
                return i;
            else
                toReturn = i+1;
        }
        else if(ampmThis=="am")
            return i;
        else
            toReturn = i+1;
    }
    return toReturn;
}

function extractHour(event){
    var startTime = event.eventStart;
    var indexOfColon = startTime.indexOf(":");
    var hour = 0;

    if(indexOfColon!=-1){
        hour = startTime.substring(0,indexOfColon);
    }
    else
        hour = startTime.substring(0,startTime.length-2);
    return hour;
}

function extractMinute(event){
    var startTime = event.eventStart;
    var indexOfColon = startTime.indexOf(":");
    var minute = 0;

    if(indexOfColon!=-1){
        minute = startTime.substring(indexOfColon+1,startTime.length-2);
    }
    return minute;
}

function extractAMPM(event){
    var startTime = event.eventStart;
    var AMPM = startTime.substring(startTime.length-2);
    return AMPM;
}

function eventToString(event){
    return "<br>" + event.title + "<br" + event.location + "<br" + event.startTime + "-" + event.endTime;
}

function getMonthFromMonthName(monthName){
        for (var i = 0; i<12; i++){
            if (monthArray[i].monthName==monthName){
                return monthArray[i]
            }
        }
}

var userId = sessionStorage.getItem('currentUserID');
var uN = sessionStorage.getItem('currentUserN');
if(sessionStorage.getItem('newUser')=="true"){
    var allUsersList = [];
    client.get(getServiceBaseUrl() + "user/all-users", function (response) {
        allUsersList = JSON.parse(response);});
    userId = allUsersList[allUsersList.length-1].id;
    uN = allUsersList[allUsersList.length-1].userName;
}

function setWelcomeMessage(){
    document.getElementById("welcome").innerHTML= "Welcome, " + uN + "!";
}

window.onload= function homePg() {
    sessionStorage.setItem('monthlyOrWeekly', 'Monthly');
    var x = document.getElementById("homeID");
    var y = document.getElementById("monthlyID");
    var eventN = new Event('Meeting', 'Holy Names Academy', 'March', '1', '9:00 am', '10:00 am');
    setWelcomeMessage();
    march.addNewEvent(eventN);
    if (localStorage.getItem('monthToSet') != null) {
        setUpMonth(monthArray[localStorage.getItem('monthToSet')]);
    } else{
        setUpMonth(january);
    }
    openPage('Home', x,'#bccceb');
    openSubTab('Monthly', y, '#d3ddf0');
    //box.style.display="none";
    //setWeekendColor();
}







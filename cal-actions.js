
//TAB FUNCTIONS


                
//

    window.onload= function homePg(){
                var x=document.getElementById("homeID");
                var y=document.getElementById("monthlyID");
                var eventN= new Event('Meeting','Holy Names Academy','March','1','9:00 am','10:00 am');

                march.addNewEvent(eventN);
                setUpMonth(march);
                setUpWeek(march,1);
                openPage('Home', x,'#73C6B6');
                openSubTab('Monthly',y,'#A2D9CE');
                box.style.display="none";
            }
//

        // function makeEventDisplays(month){
        //     var s;
        //     var index;
        //     for(var i = (month.startingIndex-1); i<(month.numDays+month.startingIndex-1); i++){
        //         index = i+1;
        //         s = document.getElementsByClassName("day")[i+7];
        //         s.addEventListener(type="click",function(){eventsTextShow(index)});
        //     }
        // }

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
    var february = new Month(29,'February',2,5);
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
                    //makeEventDisplays(month);
                    currentMonthIndex = month.index-1;
                    var startingIndex = month.startingIndex;
                    for(var i = 1; i<=42; i++){
                        document.getElementById(i).innerHTML="";
                        document.getElementById(i).style.backgroundColor="#f2f2f2";
                    }
                document.getElementById("heading").innerHTML = month.monthName.substring(0,1).toUpperCase() + month.monthName.substring(1).toLowerCase() + " 2020"
                var a;
                    for(var i = startingIndex; i<(month.numDays + startingIndex); i++) {
                        a="";
                        for (var j = 0; j < (month.eventsForMonth[i-startingIndex].length); j++) {
                                a += "<br>" + month.eventsForMonth[i-startingIndex][j].eventTitle;
                        }
                        document.getElementById(i).innerHTML+=i-(startingIndex-1)+ a;
                        document.getElementById(i).style.backgroundColor="white";
                    }
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

//WEEK FUNCTIONS
var currentWeek = {m: january, w: 1};

           function setUpWeek(month,week){
               currentWeek = {m: month, w: week};
                var startingIndex = month.startingIndex;
                var previousMonth = month.getPreviousMonth();

                for(var i = 0; i<7; i++){
                    document.getElementById(i+43).innerHTML = "";
                    document.getElementById(i+42).style.backgroundColor = "white";
                }

                if(week == 1){
                    for (var i=startingIndex-1; i>0; i--){
                        document.getElementById(i+42).innerHTML += previousMonth.numDays-((startingIndex-1)-i);
                        document.getElementById(i+42).style.backgroundColor = "#f2f2f2";
                    }
                    for (var i=startingIndex-1; i<7; i++){
                        document.getElementById(i+43).innerHTML += i-(startingIndex-2);
                    }
                }
                else{
                    for (var i = 0; i<7; i++) {
                        document.getElementById(i+43).innerHTML += 7*(week-1)+i-startingIndex+2;
                    }
                }
                document.getElementById("weekHeader").innerHTML = month.monthName;
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
                var eventN = new Event(eventTitle,eventLocation,eventMonth,eventDay,eventStart,eventEnd);
                monthN.addNewEvent(eventN);
                setUpMonth(monthN);
            }


//LIST FUNCTIONS
    var todoButton = document.getElementById("todoButton");
            
            function addTodosHandler(event) {
                  // Get User Input
                  var inputElement = document.getElementById("todoInput");
                  var inputValue = inputElement.value;
                  // Create List Item
                  var newListItem = document.createElement("li");
                  // Use Input to Populate List Item
                  newListItem.innerText = inputValue;
                  // Add Element to the todos list.
                  var todosList = document.getElementById("todos");
                  todosList.append(newListItem);

                  // Clear input
                  inputElement.value = "";
                }

                 
                  todoButton.addEventListener("click", addTodosHandler);


//EVENT POP IN A BOX

    var box= document.getElementById("eventBoxID");

    var s=document.getElementsByClassName("closeX")[0];
    s.addEventListener("click",close);

    function close() {
        box.style.display = "none";
    }

            function eventsTextShow(dayIndex) {
                var monthN = monthArray[currentMonthIndex];
                var b = "There are no events on this day."

                if (monthN.eventsForMonth[0].length != -1 && monthN.eventsForMonth[dayIndex - 1].length != -1) {
                    b = "Events:" + "<br>";
                    b += monthN.getFullEventsForDay(dayIndex);
                }
            }

    function eventsTextShow(dayIndex){
        var monthN=monthArray[currentMonthIndex];
        var b = "There are no events on this day."
        //var indexOfEvent = parseInt(day) + monthN.startingIndex - 2;
        if(monthN.eventsForMonth[dayIndex-1].length!=0) {
            b = "Events:" + "<br>";
            b += monthN.getFullEventsForDay(dayIndex);
            // for (var i = 0; i < monthN.eventsForMonth[parseInt(day) + monthN.startingIndex - 2].length; i++) {
            //     b += "<br>" + monthN.eventsForMonth[parseInt(day) + parseInt(monthN.startingIndex) - 2][i].fullEvent;
            // }
        }
        document.getElementById("eventsBox").innerHTML=b;
        box.style.display = "block";
}
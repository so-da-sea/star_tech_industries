
//TAB FUNCTIONS


                


    window.onload= function homePg(){
                var x=document.getElementById("homeID");
                var y=document.getElementById("monthlyID");
                var eventN= new Event('Meeting','Holy Names Academy','March','1','9:00 am','10:00 am');

                march.addNewEvent(eventN);
                setUpMonth(march);
                openPage('Home', x,'#73C6B6');
                openSubTab('Monthly',y,'#A2D9CE');
            }


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

    var january= new Month(31, 'January', 1);
    var february = new Month(29,'February',2);
    var march = new Month(31,'March',3);
    var april = new Month(30,'April',4);
    var  may = new Month(31,'May',5);
    var june = new Month(30,'June',6);
    var july = new Month(31,'July',7);
    var august = new Month(31,'August',8);
    var september = new Month(30,'September',9);
    var october = new Month(31,'October',10);
    var november = new Month(30,'November',11);
    var december = new Month(31,'December',12);



    var monthArray = new Array(january, february, march, april, may, june, july, august, september, october, november, december);

            function setUpMonth(month){//month being a month obj
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

            function eventsTextShow(dayIndex){
                var monthN=monthArray[currentMonthIndex];
                var b = "There are no events on this day."

                if(monthN.eventsForMonth[0].length!=-1 && monthN.eventsForMonth[dayIndex-1].length!=-1) {
                    b = "Events:" + "<br>";
                    b += monthN.getFullEventsForDay(dayIndex);
            }

        document.getElementById("eventsBox").innerHTML=b;
        box.style.display = "block";
}
           

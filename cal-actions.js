
//TAB FUNCTIONS

 
                
//

    window.onload= function homePg(){
                var x=document.getElementById("homeID");
                var y=document.getElementById("monthlyID");
                var eventN= new Event('Meeting','Holy Names Academy','March','1','9:00 am','10:00 am');

                march.addNewEvent(eventN);
                setUpMonth(march);
                openPage('Home', x,'#73C6B6');
                openSubTab('Monthly',y,'#A2D9CE');
            }
//

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

//            var openSubL=document.getElementById('listID');
//                openSubTab('listSubTab',openSubL,'#82E0AA');
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
//     var numDays = 0;
//     var monthName = "";
//     var index = 0;
//     var eventsForMonth = [];
    var currentMonthIndex=0;
    //var monthDays = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
    //var monthNames = new Array('january','february','march','april'
    //,'may','june','july','august','september','october','november','december');

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
                document.getElementById("heading").innerHTML = month.monthName.substring(0,1).toUpperCase() + month.monthName.substring(1).toLowerCase() + " 2020";
                //.substring(0,1).toUpperCase()+month.getMonthName().substring(1)
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
              
              
                eventTitle= window.prompt("Title of Event: ", "Meeting");
                    if (eventTitle!= ""){
                        fullEvent+=eventTitle;
                        eventAlert+= eventTitle;
                        
                    }
                eventLocation= window.prompt("Location of Event: ", "Holy Names Academy");
                    if (eventLocation!=""){
                        fullEvent+= "<br>" + eventLocation;
                        eventAlert+= "\n" + eventLocation
                    }
                 eventMonth= (window.prompt ("Month of the Event: ", "March")).trim();
                    if (eventMonth != ""){
                        fullEvent+="<br>" + eventMonth + " ";
                        eventAlert+="\n" + eventMonth + " ";
                        for(var i = 0; i<12; i++){
                            if(eventMonth.toLowerCase()==monthArray[i].monthName.toLowerCase())
                                monthN = monthArray[i];
                        }
                    }

                eventDay= window.prompt ("Day of the Event: ", "1");
                    if (eventDay != ""){
                        fullEvent+=eventDay;
                        eventAlert+=eventDay;
                    }
                    eventDay= eventDay.toString();
                 
                 eventStart= window.prompt("Start Time: ", "9:00am");
                     if (eventStart!=""){
                         fullEvent+="<br>" + eventStart + "-";
                         eventAlert+="\n" + eventStart + "-";
                    }
                  eventEnd= window.prompt("End Time: ", "10:00am");
                    if (eventStart!=""){
                        fullEvent+= eventEnd+"<br><br>";
                        eventAlert+= eventEnd;
                        
                    }
                
                window.alert(eventAlert);
                var findId = parseInt(eventDay)+ parseInt(monthN.startingIndex-1);
                //document.getElementById(findId.toString()).innerHTML += "<br>" + eventTitle;
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

 

//MODAL FUNCTIONS
//    var modal = document.getElementById("myModal");            
//    var z= document.getElementById("events");
//    var certainDay = document.getElementById("1");
//    var span = document.getElementsByClassName("close")[0];
//
//        //ONLY WORKS FOR DAY 1 SO FAR
//
//            certainDay.addEventListener("onclick",displayModal);
//
//            function displayModal() {
//                modal.style.display = "block";
//                window.z.innerHTML += "<br>" + fullEvent;
//                fullEvent="";
//            }
//
//
//            // When the user clicks the button, open the modal
//
//
//            span.onclick=function clos() {
//                modal.style.display = "none";
//            }
//
//            window.onclick = function(event) {
//                if (event.target == modal) {
//                    modal.style.display = "none";
//                }
//            }



//EVENT POP IN A BOX

    var box= document.getElementById("eventBoxID");

    var s=document.getElementsByClassName("close")[0];
    s.addEventListener("onclick",close);

    function close() {
        box.style.display = "none";
    }

    function eventsTextShow(day){
        var monthN=monthArray[currentMonthIndex];
        var b = "There are no events on this day."
        if([day + monthN.startingIndex - 1].length!=0) {
            b = "Events: ";
            box.style.display = "block";
            for (var i = 0; i < monthN.eventsForMonth[day + monthN.startingIndex - 1].length; i++) {
                b += "<br>" + monthN.eventsForMonth[day + monthN.startingIndex - 1][i].fullEvent;
            }
        }
        document.getElementById("eventsBox").innerHTML=b;
        //console.log(eventPopUp[eventDay-1]);
        //eventPopUp[eventDay-1]="  ";

}
           

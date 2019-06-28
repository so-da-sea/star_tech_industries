

//TAB FUNCTIONS

    var homeOpen=document.getElementById("Home");
    var listOpen=document.getElementById("List");

                homeOpen.addEventListener("onclick",defaultOpenH)
                function defaultOpenH(){
                                var openH=document.getElementById("em");
                                openSubTab('Monthly',openH,'#82E0AA');
                }

                
                listOpen.addEventListener("onclick",defaultOpenL)
                function defaultOpenL(){
                                var openL=document.getElementById("listSubTab");
                                openSubTab('listSubTab',openL,'#A2D9CE');
                }

    window.onload= function homePg(){
                var x=document.getElementById("me");
                var y=document.getElementById("em");
                
                setUpMonth(31, 'march',3);
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
    var monthDays = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
    var monthNames = new Array('january','february','march','april'
    ,'may','june','july','august','september','october','november','december');

    var january= new Month(31, "january", 1);
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
     

            function getStartingIndex(monthName){
                        var startingIndex;
                        if(monthName=='march' || monthName=='november'){
                            startingIndex=1;  }
                        if(monthName=='june'){
                            startingIndex=2;  }
                        if(monthName=='september' || monthName=='december'){
                            startingIndex=3;  }
                        if(monthName=='january' || monthName=='april' || monthName=='july'){
                            startingIndex=4;  }
                        if(monthName=='october'){
                            startingIndex=5;  }
                        if(monthName=='may'){
                            startingIndex=6;  }
                        if(monthName=='february' || monthName=='august'){
                            startingIndex=7;  }
                        return startingIndex;
                    }

            function setUpMonth(numDays, monthName, monthNum){
                    currentMonthIndex = monthNum-1;
                    var startingIndex = getStartingIndex(monthName);
                    for(var i = 1; i<=42; i++){
                        document.getElementById(i).innerHTML="";
                        document.getElementById(i).style.backgroundColor="#f2f2f2";
                    }
                document.getElementById("heading").innerHTML = monthName.substring(0,1).toUpperCase()+monthName.substring(1)+ " 2020";
                //startingIndex==7 || startingIndex==6 && numsDays==31
                    for(var i = startingIndex; i<(numDays+startingIndex); i++){
                        document.getElementById(i).innerHTML+=i-(startingIndex-1);
                        document.getElementById(i).style.backgroundColor="white";
                    }
                }

            function moveForwardsThroughMonths(){
                if(currentMonthIndex==11)
                    setUpMonth(31,'january',1);
                else
                    setUpMonth(monthDays[currentMonthIndex+1],monthNames[currentMonthIndex+1],currentMonthIndex+2);
                }

            function moveBackwardsThroughMonths(){
                if(currentMonthIndex==0)
                    setUpMonth(31,'december',12);
                else
                    setUpMonth(monthDays[currentMonthIndex-1],monthNames[currentMonthIndex-1],currentMonthIndex);
                }


//EVENT FUNCTIONS  

    var fullevent="";
    var eventTitle="";
    var eventLocation="";
    var eventDay="";
    var eventMonth="";
    var eventStart="";
    var eventEnd= "";
    var eventAlert=""; 

            function infoEvent(){
                eventAlert="";
                var month;
              
              
                eventTitle= window.prompt("Title of Event: ", "Meeting");
                    if (eventTitle!= ""){
                        fullevent+=eventTitle;
                        eventAlert+= eventTitle;
                        
                    }
                eventLocation= window.prompt("Location of Event: ", "Holy Names Academy");
                    if (eventLocation!=""){
                        fullevent+= "<br>" + eventLocation;
                        eventAlert+= "\n" + eventLocation
                    }
                 eventMonth= window.prompt ("Month of the Event: ", "March");
                    if (eventMonth != ""){
                        fullevent+="<br>" + eventMonth + " ";
                        eventAlert+="\n" + eventMonth + " ";
                    }
                for (var i = 0; i<12;i++){
                    eventMonth==monthArray[i].getMonthName();
                    month=monthArray[i];
                }

                eventDay= window.prompt ("Day of the Event: ", "1");
                    if (eventDay != ""){
                        fullevent+=eventDay;
                        eventAlert+=eventDay;
                    }
                    eventDay= eventDay.toString();
                 
                 eventStart= window.prompt("Start Time: ", "9:00am");
                     if (eventStart!=""){
                         fullevent+="<br>" + eventStart + "-";
                         eventAlert+="\n" + eventStart + "-";
                    }
                  eventEnd= window.prompt("End Time: ", "10:00am");
                    if (eventStart!=""){
                        fullevent+= eventEnd+"<br><br>";
                        eventAlert+= eventEnd;
                        
                    }
                
                window.alert(eventAlert);
                var findId = parseInt(eventDay)+ (parseInt(getStartingIndex(eventMonth.toLocaleLowerCase()))-1);
                document.getElementById(findId.toString()).innerHTML += "<br>" + eventTitle;
                var event = new Event(eventTitle,eventLocation,eventMonth,eventDay,eventStart,eventEnd);
                month.addNewEvent(event);
            }


//LIST FUNCTIONS
    var todoButton = document.getElementById("todoButton")
            
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
    var modal = document.getElementById("myModal");            
    var z= document.getElementById("events");
    var certainDay = document.getElementById("1");
    var span = document.getElementsByClassName("close")[0];

        //ONLY WORKS FOR DAY 1 SO FAR

            certainDay.addEventListener("onclick",displayModal);

            function displayModal() {
                modal.style.display = "block";
                window.z.innerHTML += "<br>" + fullevent;
                fullevent="";
            }


            // When the user clicks the button, open the modal


            span.onclick=function clos() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

           

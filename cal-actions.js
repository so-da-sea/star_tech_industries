
            var fullevent="";
            var eventTitle="";
            var eventLocation="";
            var eventDay="";
            var eventStart="";
            var eventEnd= "";
            var eventAlert="";

            function infoEvent(){
                eventAlert="";
              
              
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
                 eventDay= window.prompt ("Day is the Event: ", "1");
                    if (eventDay!=""){
                        fullevent+="<br>" + "June " + eventDay;
                        eventAlert+="\n" + "June " + eventDay;
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
            document.getElementById(eventDay).innerHTML += "<br>" + eventTitle;
            }

            function showEvents() {
                var popup = document.getElementById("myPopup");
                popup.classList.toggle("show");
                document.getElementById("myPopup").innerHTML+= "<br>" + fullevent;
                fullevent = "";}

            window.onload= function homePg(){
                var x=document.getElementById("me");
                var y=document.getElementById("em");

                openPage('Home', x,'#73C6B6');
                openSubTab('Monthly',y,'#A2D9CE');
            }


            function addTodosHandler(event) {
                  // Get User Input
                  var inputElement = document.getElementById("todoInput");
                  var inputValue = inputElement.value;
                  // Create List Item
                  let newListItem = document.createElement("li");
                  // Use Input to Populate List Item
                  newListItem.innerText = inputValue;
                  // Add Element to the todos list.
                  var todosList = document.getElementById("todos");
                  todosList.append(newListItem);

                  // Clear input
                  inputElement.value = "";
                }

                  var todoButton = document.getElementById("todoButton")
                  todoButton.addEventListener("click", addTodosHandler);

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
        var i,tabcontnt, tablnks;
        
        tabcontnt=document.getElementsByClassName("tabcontnt");
        for(i=0;i<tabcontnt.length;i++)
                tabcontnt[i].style.display="none";
       
       tablnks=document.getElementsByClassName("tablnk");
        for(i=0;i<tablnks.length;i++)
            tablnks[i].style.backgroundColor="";
        
        document.getElementById(pageName).style.display="block";
        elmnt.style.backgroundColor=color;
    }


            //ONLY WORKS FOR DAY 1 SO FAR
            var modal = document.getElementById("myModal");


            var certainDay = document.getElementById("1");

            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal
            certainDay.onclick = function displayModal() {
                modal.style.display = "block";
                document.getElementById("events").innerHTML+=fullevent;
                fullevent="";
            }


            span.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

# star_tech_industries

 <script>
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

             function openPage(pageName,elmnt,color){
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
        
        document.getElementById("defaultOpen").click();
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
        
        document.getElementById("defaultOpen").click();
        
    }
      
               
</script>    

<html>
    <header>
        
        <style>
            body, html{
                height: 100%;
                margin: 0;
                font-family: sans-serif;
            }    
        .tablink{
            background-color:#555;
            color:white;
            float:left;
            border:none;
            outline: none;
            cursor:pointer;
            padding: 14px 16px;
            font-size: 17px;
            width: 25%;
            font-family: sans-serif;
        }
        .tablink:hover{
            background-color: #777;
        }
        .tabcontent{
            color:white;
            display: none;
            padding: 100px 20px;
            height: 100%;
            font-family:sans-serif;
        }
        .tabcontnt{
            color: white;
            display: none;
            padding: 100px 20px;
            height: 75%;
            font-family: sans-serif;
        }
        .tablnk{
            background-color: #555;
            color: white;
            float: right;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            font-size: 15px;
            width: 25%;
            font-family: sans-serif;
        }
        .tablnk:hover{
            background-color: #777;
        }
          
            #Home {background-color: #73C6B6;}
                #Monthly{background-color: #A2D9CE;}
                #Weekly{background-color: #0D47A1}
                #Daily{background-color: #0D47A1;}
            #List {background-color: green;}
                #Lists{background-color: #4CAF50;}
            #Habits{background-color: #8E24AA;}
            

        
            
            h4{
                text-align: center;
                font-size: 140%;
                
            }
            .button{
                background-color: powderblue;
                border-color: black;
                font-size: 20px;
                
/*change margin left back later maybe*/
                margin-left: 25px;
                text-align: right;
                position:absolute;
            }
            .calender{
                display:grid;
                padding: 1px;
                grid-template-columns: auto auto auto auto auto auto auto;
                grid-template-rows: 40px 90px 90px 90px 90px 90px 90px; 
               background-color: black;
               grid-gap: 1px;
               border: none;
            }
            .day{
                color: black;
                background-color: white; 
                padding: 10px;
                font-size: 15px;
                text-align: left;
                display: grid;
                grid-template-rows: 10px 10px 10px 10px 10px;
                grid-template-columns: auto;
            }
           .may{
               background-color:#ededed;
               color:#797D7F;
           }
           .weekday{
               text-align: center;
               font-size: 20px;
               background-color: #7B7D7D;
           }
           .day, .may, .weekday{
               padding: 4px;
           }
            .addevent{
                color:black;
                font-family: sans-serif;
                padding: 10px 12px;
                text-align: center;
                background-color: aliceblue
                
            }
            .popup {
                position: relative;
                display: inline-block;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .popup .popuptext {
                visibility: hidden;
                width: 300px;
                height: 150px;
                background-color: gainsboro;
                color: black;
                text-align: center;
                border-radius: 6px;
                padding: 10px;
                position: absolute;
                z-index: 1;
                bottom: %;
                left: -335%;
                margin-left: -100px;
            }
            .popup .popuptext::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: #555 transparent transparent transparent;
            }
            .popup .show {
                visibility: visible;
                -webkit-animation: fadeIn 1s;
                animation: fadeIn 1s;}
        
            @-webkit-keyframes fadeIn {
                from {opacity: 0;} 
                to {opacity: 1;}
            }
            @keyframes fadeIn {
                from {opacity: 0;}
                to {opacity:1 ;}
            }
            .events{
                color:black;
                text-align: center;
                
            }
            
        </style>
        
            <Title> Star Tech Industries</Title> </header>
            <header>Star Tech Planners, inc.</header>
    
    <body>
        
        
        <button class="tablink" onclick="openPage('Home', this,'#73C6B6')">Home</button>
        <button class="tablink" onclick="openPage('List', this,'green')">List</button>
        <button class="tablink" onclick="openPage('Habits', this,'#8E24AA')">Habits</button>

        <div id="Home" class="tabcontent">
            <button class="tablnk" onclick="openSubTab('Daily',this,'#0D47A1')">Daily Calendar</button>
                <div id="Daily" class="tabcontnt">
                <h4>daily stuff</h4>
                    <p>this is where the daily planner will go...</p>
                </div>
            
            
            <button class="tablnk" onclick="openSubTab('Weekly',this,'#0D46A1')">Weekly Calendar</button>
                <div id="Weekly" class="tabcontnt">
                <h4>weekly stuff...</h4>
                    <p>this is where the weekly calendar will go...</p>
                </div>
            
            <button class="tablnk" onclick="openSubTab('Monthly',this,'#A2D9CE')">Monthly Calendar</button>
                <div id="Monthly" class="tabcontnt">
                    <h4>June 2019</h4>
    
                        <div class="addingEvent" onclick="infoEvent()" ><button id="addevent">Add Event </button>
                                <span class="eventText" id="eventNew"></span>
                            </div>        
                        
                    <div class= "calender">
                            <div class= "weekday">Sun.</div>
                            <div class= "weekday">Mon.</div>
                            <div class= "weekday">Tue.</div>
                            <div class= "weekday">Wed.</div>
                            <div class= "weekday">Thu.</div>
                            <div class= "weekday">Fri.</div>
                            <div class= "weekday">Sat.</div>
                            <div class= "may">26</div>
                            <div class= "may">27</div>
                            <div class= "may">28</div>
                            <div class= "may">29</div>
                            <div class= "may">30</div>
                            <div class= "may">31</div>

                            <div class= "day" id="1"><div class="popup" id= "day1" onclick="showEvents()">1
                                    <span class="popuptext" id="myPopup" > Events: </span>
                                    </div> 
                                </div>
                            <div class= "day" id="2">2 </div>
                            <div class= "day" id="3">3 </div>
                            <div class= "day" id="4">4 </div>
                            <div class= "day" id="5">5 </div>
                            <div class= "day" id="6">6 </div>
                            <div class= "day" id="7">7 </div>
                            <div class= "day" id="8">8 </div>
                            <div class= "day" id="9">9 </div>
                            <div class= "day" id="10">10 </div>
                            <div class= "day" id="11">11 </div>
                            <div class= "day" id="12">12 </div>
                            <div class= "day" id="13">13 </div>
                            <div class= "day" id="14">14 </div>
                            <div class= "day" id="15">15 </div>
                            <div class= "day" id="16">16 </div>
                            <div class= "day" id="17">17 </div>
                            <div class= "day" id="18">18 </div>
                            <div class= "day" id="19">19 </div>
                            <div class= "day" id="20">20 </div>
                            <div class= "day" id="21">21 </div>
                            <div class= "day" id="22">22 </div>
                            <div class= "day" id="23">23 </div>
                            <div class= "day" id="24">24 </div>
                            <div class= "day" id="25">25 </div>
                            <div class= "day" id="26">26 </div>
                            <div class= "day" id="27">27 </div>
                            <div class= "day" id="28">28 </div>
                            <div class= "day" id="29">29 </div>
                            <div class= "day" id="30">30 </div>
                            <div class= "may">1</div>
                            <div class= "may">2</div>
                            <div class= "may">3</div>
                            <div class= "may">4</div>
                            <div class= "may">5</div>
                            <div class= "may">6</div>
                        </div>
                 </div>            
        </div>
        
         <div id="List" class="tabcontent">
             <div id="List" class="header">
               <h3>List</h3>
                 <button class="tablnk" onclick="openSubTab('Lists',this,'#4CAF50')"> Lists</button>
                <div id="Lists" class="tabcontnt">
                <h4>this is where the personal lists/to dos will go...</h4>
                 <button class="button" onclick="newElement()">Add</button>
                    <input type="text" id="input" placeholder="eggs, shampoo,...">
                
                 </div>  
            </div>
        </div>
        
        <div id="Habits" class="tabcontent">
        <h3>Habits</h3>
        <p>This is where you will keep track of your habits...</p>
        </div>
        

        
       
    </body>
</html>


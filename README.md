# star_tech_industries
<html>
    <header>
        
        <style>
            body{
                 background-color: aliceblue;
            }
            
            h1{
                text-align: center;
                
            }
            button{
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
                padding: 20px;
                grid-template-columns: auto auto auto auto auto auto auto;
                grid-template-rows: 90px 90px 90px 90px 90px 90px ;

                
                
            }
            .day{
                color: black;
                background-color: white; 
                border: 1px solid;
                padding: 10px;
                font-size: 15px;
                text-align: left;
                display: grid;
                grid-template-rows: 10px 10px 10px 10px 10px;
                grid-template-columns: auto;
                
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
        
            <Title> Alert Calender Project</Title> </header>
    
    <body>
        <h1> June 2019</h1>
        
        
        
        <div class="addingEvent" onclick="infoEvent()"><button>Add Event </button>
  <span class="eventText" id="eventNew"></span>
            
</div>
        
        
        


        
        <div class= "calender">
            <div class= "may"></div>
            <div class= "may"></div>
            <div class= "may"></div>
            <div class= "may"></div>
            <div class= "may"></div>
            <div class= "may"></div>
            
            <div class= "day" id="1"><div class="popup" id= "day1" onclick="showEvents()">1
  <span class="popuptext" id="myPopup" > Events: </span>
                </div> </div>
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
        </div>
        
        <script>
            var fullevent="";
            var eventTitle="";
            var eventLocation="";
            var eventDay="";
            var eventStart="";
            var eventEnd= "";
            var eventAlert="";
            
            function infoEvent(){
              
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
                        fullevent+= eventEnd;
                        eventAlert+= eventEnd;
                        
                    }
                
                window.alert(eventAlert);
            document.getElementById(eventDay).innerHTML += "<br>" + eventTitle;
            }
            
            
            function showEvents() {
                var popup = document.getElementById("myPopup");
                popup.classList.toggle("show");
                document.getElementById("myPopup").innerHTML+= "<br>" + fullevent;
                fullevent = "";
}
                
      
               
</script>    
    </body>
</html>

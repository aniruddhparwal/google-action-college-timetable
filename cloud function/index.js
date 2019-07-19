'use strict';

const {
  dialogflow
} = require('actions-on-google');
const functions = require('firebase-functions');
//const userId = conv.user.id;

const app = dialogflow({
  debug: true
});


var timeTable = {}; //object for timeTable

var toc = {
  "subject": 'Theory Of Computation (TOC)',
  "faculty": 'Chandramala Mam',
  "room": "311 A",
};

var cn = {
  "subject": 'Computer Network (CN)',
  "faculty": 'Sapana Mam',
  "room": "311 A",
}

var cnl = {
  "subject": 'Computer Network Lab(CN)',
  "faculty": 'Sapana Mam',
  "room": "121",
}

var os = {
  "subject": 'Operating System (OS)',
  "faculty": 'Mitesh Sir',
  "room": "311 A",
}

var osl = {
  "subject": 'Operating System Lab(OS)',
  "faculty": 'Mitesh Sir',
  "room": "121",
}

var ai = {
  "subject": 'Artificial Intelligence (AI)',
  "faculty": 'Priya Mam',
  "room": "311 A",
}

var mp = {
  "subject": 'Minor Project',
  "faculty": 'Neha Mam',
  "room": "108 (M.B.A)",
}

var ajl = {
  "subject": 'Advance Java Lab',
  "faculty": 'Prince Kumar Sir ',
  "room": "311 A",
}

var sof = {
  "subject": 'SOF',
  "faculty": 'AMQ',
  "room": "311 A",
}

var lib = {
  "subject": 'Library',
  "faculty": 'Pustakaalay Adhyaksh',
  "room": "Pustkalaya",
}

var eoi = {
  "subject": 'EOI',
  "faculty": 'Chandramala Mam',
  "room": "108 (M.B.A)",
}



var monday = {
  "lecture1": toc,
  "lecture2": ajl,
  "lecture3": os,
  "lecture4": ai,
  "lecture5": sof,
  "lecture6": cn,
  "lecture7": toc
};
var tuesday = {
  "lecture1": cn,
  "lecture2": osl,
  "lecture3": osl,
  "lecture4": toc,
  "lecture5": os,
  "lecture6": mp,
  "lecture7": mp
};
var wednesday = {
  "lecture1": cn,
  "lecture2": cnl,
  "lecture3": cnl,
  "lecture4": toc,
  "lecture5": os,
  "lecture6": ai,
  "lecture7": lib
};
var thursday = {
  "lecture1": ai,
  "lecture2": ajl,
  "lecture3": ajl,
  "lecture4": ai,
  "lecture5": toc,
  "lecture6": mp,
  "lecture7": mp
};

var friday = {
  "lecture1": ai,
  "lecture2": ajl,
  "lecture3": ajl,
  "lecture4": os,
  "lecture5": cn,
  "lecture6": eoi,
  "lecture7": eoi
};



//var i;
//var currentTime;
//for (i = 0; i < 1; i++) { 
//  currentTime = new Date();
//}

var currentTime = 0;
var currentDay = 0;
var currentHour = 0;
var currentMin = 0;
var compareTime = 0;


//var currentTime = 0;
//var currentDay = 0;
//var currentHour = 0;
//var currentMin =0;
var currentLecture = 0;

//});
//var currentHour = 15;
//var currentMin = 29;

var currentSubject = null;
var currentFaculty = null;
var callSubject = null;
var callFaculty = null;
var upcomingSubject = null;
var upcomingFaculty = null;






//app.intent('DefaultWelcomeIntent', (conv) => {



timeTable[0] = (monday);
timeTable[1] = (tuesday);
timeTable[2] = (wednesday);
timeTable[3] = (thursday);
timeTable[4] = (friday);
//var currentDay = 4;

function setTime() {
  currentTime = new Date();
  currentDay = currentTime.getDay();
  currentHour = currentTime.getHours();
  currentMin = currentTime.getMinutes();
  currentHour += 5;
  currentMin += 30;
  if (currentMin >= 60) {
    currentHour += 1;
    currentMin -= 60;
  }
  if (currentHour > 23) {
    currentHour = 0;
  }
  compareTime = currentHour * 100 + currentMin;
  if (compareTime > 900 && compareTime < 1000) {
    currentLecture = 1;
    currentSubject = timeTable[currentDay - 1].lecture1.subject;
    currentFaculty = timeTable[currentDay - 1].lecture1.faculty;
    upcomingSubject = timeTable[currentDay - 1].lecture2.subject;
    upcomingFaculty = timeTable[currentDay - 1].lecture2.faculty;

  }

  if (compareTime > 1000 && compareTime < 1050) {
    currentLecture = 2;
    currentSubject = timeTable[currentDay - 1].lecture2.subject;
    currentFaculty = timeTable[currentDay - 1].lecture2.faculty;
    upcomingSubject = "Lunch";
    upcomingFaculty = "Canteen";
  }

  if (compareTime >= 1050 && compareTime < 1140) {
    currentLecture = 3;
    currentSubject = timeTable[currentDay - 1].lecture3.subject;
    currentFaculty = timeTable[currentDay - 1].lecture3.faculty;
    upcomingSubject = timeTable[currentDay - 1].lecture2.subject;
    upcomingFaculty = timeTable[currentDay - 1].lecture2.faculty;
  }

  if (compareTime >= 1140 && compareTime < 1240) {
    currentLecture = 11
    upcomingSubject = timeTable[currentDay - 1].lecture4.subject;
    upcomingFaculty = timeTable[currentDay - 1].lecture4.faculty;
  }

  if (compareTime >= 1240 && compareTime < 1330) {
    currentLecture = 4;
    currentSubject = timeTable[currentDay - 1].lecture4.subject;
    currentFaculty = timeTable[currentDay - 1].lecture4.faculty;
    upcomingSubject = timeTable[currentDay - 1].lecture5.subject;
    upcomingFaculty = timeTable[currentDay - 1].lecture5.faculty;
  }

  if (compareTime >= 1330 && compareTime < 1420) {
    currentLecture = 5;
    currentSubject = timeTable[currentDay - 1].lecture5.subject;
    currentFaculty = timeTable[currentDay - 1].lecture5.faculty;
    upcomingSubject = timeTable[currentDay - 1].lecture6.subject;
    upcomingFaculty = timeTable[currentDay - 1].lecture6.faculty;
  }

  if (compareTime >= 1420 && compareTime < 1510) {
    currentLecture = 6;
    currentSubject = timeTable[currentDay - 1].lecture6.subject;
    currentFaculty = timeTable[currentDay - 1].lecture6.faculty;
    upcomingSubject = timeTable[currentDay - 1].lecture7.subject;
    upcomingFaculty = timeTable[currentDay - 1].lecture7.faculty;
  }

  if (compareTime >= 1510 && compareTime < 1600) {
    currentLecture = 7;
    currentSubject = timeTable[currentDay - 1].lecture7.subject;
    currentFaculty = timeTable[currentDay - 1].lecture7.faculty;
    upcomingSubject = "Day Completed";
    upcomingFaculty = "Go Back Home";
  }
}


console.log(compareTime)



app.intent('currentLecture', (conv) => {
  setTime();

  if (compareTime >= 0 && compareTime < 600) {
    conv.add('Good Night For Now, Come in the morning to Timetable'); //::' + compareTime + 'current: '+ currentTime);
    //conv.add('day: ' + currentDay + ' hr: ' + currentHour + ' min: ' + currentMin);
  } else if (compareTime >= 600 && compareTime < 900) {
    conv.close('College Has not started yet'); //:: '+ compareTime )
  } else if (compareTime >= 1600 && compareTime < 2399) {
    conv.add('Day is Over Now')
  } else {
    if (currentLecture == 11) {
      conv.add('Yeh Samay Bhojan Prasadi Ke Liye Ye hai.. Krapiya Bhojanalay Jaye');
    } else {
      conv.add('This is Lecture No. ' + currentLecture);
      conv.add('This Lecture is of ' + currentSubject + ' and will be taken by ' + currentFaculty); //+ 'acdsfs:: ' + currentLecture + ' compare:' + compareTime + ' current :' +currentTime);
      //conv.add("Made by Aniruddh Parwal");

    }
  }
});

app.intent('upcomingLecture', (conv) => {
  //  const userId = conv.user.id;
  setTime();

  if (compareTime >= 1600 && compareTime < 2399) {
    conv.add('Day is Over Now')
  } else {
    if (currentLecture == 7) {
      conv.add('Last lecture is Going on.');
    } else {
      conv.add('Next Lecture is of ' + upcomingSubject + ' and will be taken by ' + upcomingFaculty);
    }
  }
  //conv.add(" Made by Aniruddh Parwal");
  //conv.close('This feature is under Development');

});

app.intent('lunchCall', (conv) => {
  setTime();
  
  if(currentDay == 6)
  {
    conv.add("Bhai Kabhi bhi Khale ... Pura Din tera he hai");    
  }
  else if(currentDay > 0  && currentDay < 6)
  {
    if(compareTime >= 0 && compareTime < 900)
    {
      conv.add("Bhai College Chalu toh Hone De...");
    }
    else if (compareTime >= 900 && compareTime < 1140)
    {
      //LunchTime Code
      compareTime = currentHour*60 + currentMin;
  	  remainingTime = 700 - compareTime;
      remainingHour = Math.trunc(remainingTime/60);
      remainingMin =  remainingTime%60;
      conv.add("Wait a little..."+remainingHour+' hour and '+remainingMin+" Minutes Left"); 
    }
    else if (compareTime >= 1240 && compareTime < 1600)
    {
      conv.add("Fresh Food is waiting at Home.... Get it after reaching home"); 
    }
    else
    {
      conv.add("College me milenge");
    }
  }
  else{
    conv.add("Today is Sunday Enjoy food every Minute"); 
  }  
});
exports.attandence = functions.https.onRequest(app);

$(document).ready(function() {

<<<<<<< HEAD
    $('.collapsible').collapsible();
    $('.slider').slider({
        full_width: true
    });
    $('.materialboxed').materialbox();
});
   $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
        
=======
   $('.collapsible').collapsible();
   $('.slider').slider({
       full_width: true
   });
   $('.materialboxed').materialbox();
});
$('.dropdown-button').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrain_width: false, // Does not change width of dropdown to that of the activator
     hover: true, // Activate on hover
     gutter: 0, // Spacing from edge
     belowOrigin: false // Displays dropdown below the button
   }
 );
>>>>>>> feature/repairbrokencode

//alert("Im in the game")

Museum = document.getElementById("navigateOptionMuseum");
Download = document.getElementById("navigateOptionDownload");
Contact = document.getElementById("navigateOptionContact");

NavigationBar = document.getElementById("navigation");
Adornments = document.getElementById("adornments");

MuseumIllustration = document.getElementById("illustration");
DownloadIllustration = document.getElementById("illustration2");
ContactIllustration = document.getElementById("illustration3");

backButton = document.getElementById("goBack");

//? ILLUSTRATIONS SWITCH
function switchToMenu(menuNum)
{
    if (menuNum == 1)
    {
        //alert("identified");
        Download.style.display = "none";
        Contact.style.display = "none";

        Museum.style.fontSize = "150%";
        Museum.style.fontWeight = "900";
        Museum.style.letterSpacing = "30%";
        Museum.style.letterSpacing = "40px";

        NavigationBar.style.borderBottom = "solid rgb(250, 180, 2)";
        NavigationBar.style.marginTop = "10%"

        Adornments.style.display = "none";
        MuseumIllustration.style.display = "block";
        
        backButton.style.display = "block";

    }
    else if(menuNum == 2)
    {
        Museum.style.display = "none";
        Contact.style.display = "none";
    
        Download.style.fontSize = "150%";
        Download.style.fontWeight = "900";
        Download.style.letterSpacing = "30%";
        Download.style.letterSpacing = "40px";
    
        NavigationBar.style.borderBottom = "solid rgb(250, 180, 2)";
        NavigationBar.style.marginTop = "10%"
    
        Adornments.style.display = "none";
        DownloadIllustration.style.display = "block";

        backButton.style.display = "block";
    }
    else if (menuNum == 3)
    {
        Museum.style.display = "none";
        Download.style.display = "none";
    
        Contact.style.fontSize = "150%";
        Contact.style.fontWeight = "900";
        Contact.style.letterSpacing = "30%";
        Contact.style.letterSpacing = "40px";
    
        NavigationBar.style.borderBottom = "solid rgb(250, 180, 2)";
        NavigationBar.style.marginTop = "10%"
    
        Adornments.style.display = "none";
        ContactIllustration.style.display = "block"; 

        backButton.style.display = "block";
    }
}


//?DOG EASTER EGG
coolDog = document.getElementById("adornments");
bigDog = document.getElementById("adornments2");
smallDog = document.getElementById("adornments3");


function EasterAnimal(EggNo)
{
    if(EggNo == 1)
    {
        coolDog.style.display = "none";
        smallDog.style.display = "block";
    }
    else if (EggNo == 3)
    {
        smallDog.style.display = "none";
        bigDog.style.display = "block";
    }
    else
    {
        bigDog.style.display = "none";
        coolDog.style.display = "block";
    }
}

//?Back to home


function goBack()
{
    //alert("working")
    Museum.style.display = "block";
    Download.style.display = "block";
    Contact.style.display = "block";

    backButton.style.display = "none";

    //?museum unstyling

    Museum.style.fontSize = "100%";
    Museum.style.fontWeight = "100";
    Museum.style.letterSpacing = "0px";

    NavigationBar.style.borderBottom = "solid rgb(250, 180, 2)";
    NavigationBar.style.marginTop = "14%"

    MuseumIllustration.style.display = "none";
    Adornments.style.display = "block";

    //?download unstyling

    Download.style.fontSize = "100%";
    Download.style.fontWeight = "100";
    Download.style.letterSpacing = "0px";

    NavigationBar.style.borderBottom = "solid rgb(250, 180, 2)";
    NavigationBar.style.marginTop = "14%"

    DownloadIllustration.style.display = "none";
    Adornments.style.display = "block";

    //?Contact unstyling

    Contact.style.fontSize = "100%";
    Contact.style.fontWeight = "100";
    Contact.style.letterSpacing = "0px";

    NavigationBar.style.borderBottom = "solid rgb(241, 229, 199) 3px";
    NavigationBar.style.borderBottom = "solid rgb(241, 229, 199) 3px";
    NavigationBar.style.marginTop = "14%"

    ContactIllustration.style.display = "none";
    Adornments.style.display = "block";

    //!learn how to reIntroduce hover functions >> tried jQuery; it overwrote JS and CSS. Cannot recreate the effects it overwrote
}

//?syntax jQuery animations
// $('.cloudyAdornments').animate({ animate : 'value'},
//                                 duration,
//                                 easing, 
//                                 callback);

// $('selector expression').animate({ propertyName : 'value'},{ options });


//! this should be under animation folder; but t's oright
$(document).ready(function () {
			
    $('#secondaryCloud').animate({
        left: '-=500px',
            },
            150000, "linear")
            
    });


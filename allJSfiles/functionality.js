//alert("Im in the game")

Museum = document.getElementById("navigateOptionMuseum");
Download = document.getElementById("navigateOptionDownload");
Contact = document.getElementById("navigateOptionContact");
NavigationBar = document.getElementById("navigation");
Adornments = document.getElementById("adornments");
MuseumIllustration = document.getElementById("illustration");

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

}
}

coolDog = document.getElementById("adornments");
bigDog = document.getElementById("adornments2");
smallDog = document.getElementById("adornments3");

//?DOG EASTER EGG
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

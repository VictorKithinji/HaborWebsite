//? ANIMATIONS AND DECORATIONS FILE

//alert("I am here")

//? Ensuring only deco appears onload; illustrations remain out


//? Ensuring all the other options dissapear when an option is hovered and the adornments dissapear
let Museum = document.getElementById("navigateOptionMuseum");
let Download = document.getElementById("navigateOptionDownload");
let Contact = document.getElementById("navigateOptionContact");


// var imgObj = null;
//             var animate ;
            
//             function init() {
//                imgObj = document.getElementById('mainCloud');
//                imgObj.style.position= 'relative'; 
//                imgObj.style.left = '0px'; 
//             }
//             function moveClouds() {
//                 var x = 0;
//                 while(x < 20)
//                 {
//                 imgObj.style.left = parseInt(imgObj.style.left) - 20 + 'px';
//                 animate = setTimeout(moveLeft,20);    // call moveRight in 20msec
//                 }

//             }
//             function stop() {
//                clearTimeout(animate);
//                imgObj.style.left = '0px'; 
//             }
            
//             window.onload = init;

            var imgObj = null;
            var animate ;

            var imgObjSecondary = null;
            var animateSecondary ;

            document.getElementById("mainCloud").addEventListener("load", init);
            document.getElementById("mainCloud").addEventListener("load", moveClouds);
            document.getElementById("secondaryCloud").addEventListener("load", initSecondary);
            document.getElementById("secondaryCloud").addEventListener("load", moveCloudsSecondary);

            
            function init() {
               imgObj = document.getElementById('mainCloud');
               imgObj.style.position= 'relative'; 
               imgObj.style.right = '0px'; 
            }
            
            function initSecondary()
            {
                imgObjSecondary = document.getElementById('secondaryCloud');
                imgObjSecondary.style.left = '0px';
            }


            function moveClouds() {
                
                //? Primary cloud
                    let frameRate = 0.6;
                    let frame = 0.015;

                    console.log(frame)
                    imgObj.style.right = parseFloat(imgObj.style.right) + frame + 'px';
                    animate = setTimeout(moveClouds,frameRate);    // call moveRight in 20msec   

                    
                    setTimeout(() => 
                    {
                        clearTimeout(animate);
                        animate = setTimeout(stop,300);    // call moveRight in 20msec
                        // imgObj.style.left =  dispersion;
                        // imgObj.style.left = dispersion + frame + 'px';
                        // returnCloud = setTimeout(moveClouds,frameRate);    // call moveRight in 20msec  
                    }, 100000
                    )
                 
            }
            function moveCloudsSecondary()
            {
               //?secondary cloud
              
                let frameRate = 0.6;
                let frame = 0.015;

                console.log(frame)
                imgObjSecondary.style.left = parseFloat(imgObjSecondary.style.left) + frame + 'px';
                dispersion =  parseFloat(imgObjSecondary.style.left) + frame + 'px';
                animateSecondary = setTimeout(moveClouds,frameRate);    // call moveRight in 20msec   

                
                setTimeout(() => 
                {
                    clearTimeout(animateSecondary);
                    animateSecondary = setTimeout(stop,300);    // call moveRight in 20msec
                    // imgObj.style.left =  dispersion;
                    // imgObj.style.left = dispersion + frame + 'px';
                    // returnCloud = setTimeout(moveClouds,frameRate);    // call moveRight in 20msec  
                }, 100000
                )
            }

            window.onload = init;
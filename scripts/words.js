var brands = new Array(
    "a shampoo brand",
    "a fizzy drinks brand",
    "a pasta sauce brand",
    "a dishwasher company",
    "a burger restaurant",
    "a yoghurt brand",
    "a toilet cleaner brand",
    "an SUV manufacturer",
    "a television manufacturer",
    "an insurance company",
    "a cereal brand",
    "a sun cream brand");

//list of brands
var parts = new Array(
    "AirBNB",
    "Uber",
    "Tinder",
    "Netflix",
    "Spotify",
    "Shazam",
    "SnapChat",
    "Facebook",
    "GoPro",
    "a Vlogger",
    "Cara Delevinge",
    "a footballer",
    "Pinterest",
    "Periscope",
    "Instagram");

//list of creations
var things = new Array(
    "an emojii",
    "a selfie trend",
    "a VR experience",
    "a hashtag",
    "a vending machine",
    "a digital billboard",
    "an interactive music video",
    "an animation",
    "a global live stream",
    "an app");

//list of subjects
var verbs = new Array(
    "Help the",
    "Save the",
    "Protect the",
    "Free the");
    //"Feed the"

//list of subjects
var objects = new Array(
    "dogs",
    "cats",
    "bumblebees",
    "vegans",
    "dyslexics",
    "monkeys",
    "bunnies",
    "badgers",
    "penguins",
    "whales",
    "kittens",
    "ducklings",
    "lion cubs",
    "puppies",
    "donkeys",
    "seals",
    "baby dolphins",
    "tigers",
    "millennials",
//    "students",
    "ponies",
    "rhinos",
    "elephants");

//list of subjects
var adjectives = new Array(
    "gay",
    "blind",
    "colour-blind",
    "homeless",
    "deaf",
    "boss-eyed",
    "sick",
    "abused",
    "big nosed",
    "insomniac",
    "neglected",
    "asthmatic",
    "dying",
    "poor",
    "limping",
    "disabled",
    "feminist",
    "welsh",
    "obese",
    "endangered",
    "injured",
    "grieving",
    "sad",
    "tired",
    "thirsty",
    "over-worked",
    "orphaned",
    "abandoned",
    "confused",
    "bald",
    "lonely",
    "cold",
    "unloved",
    "stressed");

//list of songs
var songs = new Array(
    "Sound3.mp3",
    "Sound2.mp3",
    "Sound1.mp3");

var barHeight;
$(document).ready(function () {
    //show play button if all variables are in the query string
    if (randomverb != "" && randomobject != "" && randomadjective != "" && randomadjectivetwo != "") {
        $("#movietext").clearQueue()
        $("#awardbutton").prop("disabled", true);
        $("#playbutton").css("display", "inline-block");
        $("#playbutton").html('<i class="fa fa-play"></i> PLAY');
        $("#playbutton").attr("onclick", "playVideo()");

        $("#movietext").fadeOut("fast", function () {
            $("#movietext").text(award);
            $("#awardbutton").html('<i class="fa fa-random"></i> Randomise Again');
            $("#playbutton").show();
            $("#awardbutton").prop("disabled", false);
            $("#playbutton").prop("disabled", false);
        }).fadeIn("fast");
    }
    
    barHeight = $("#playbar").height();
});


var audio = document.getElementById("audio");

function generateBrands() {
    randombrand = brands[Math.floor(Math.random() * brands.length)];
    randompart = parts[Math.floor(Math.random() * parts.length)];
    randomthing = things[Math.floor(Math.random() * things.length)];
}

generateBrands();

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function generateCombinations() {
    subject = randomadjective + " " + randomadjectivetwo + " " + randomobject;
    award = randomverb + " " + subject;
    project = window.toTitleCase(subject);
}
generateCombinations();

function randomise() {
    randomobject = objects[Math.floor(Math.random() * objects.length)];
    var results = adjectives
        .sort(function () {
            return .5 - Math.random()
        }) // Shuffle array
        .slice(0, 2); // Get first 2 items
    randomadjective = results[0];
    randomadjectivetwo = results[1];
    randomverb = verbs[Math.floor(Math.random() * verbs.length)];
}

// Generate Button

function writeSubjectBrief() {
    
    $("#playbutton").attr("onclick", "startVideo()")

    
    $("#awardbutton").css("border-color", "#ffffff");
    setTimeout(function(){ $("#awardbutton").css("border-color", ""); }, 200);
    setTimeout(function(){ $("#awardbutton").css("border-color", "#ffffff"); }, 400);
    setTimeout(function(){ $("#awardbutton").css("border-color", ""); }, 600);
    setTimeout(function(){ $("#awardbutton").css("border-color", "#ffffff"); }, 800);
    setTimeout(function(){ $("#awardbutton").css("border-color", ""); }, 1000);
    
    //reset video
    TweenMax.killAll();
    storyboard = [];
    currentScreen = 0;
    $("#image").remove();
    $("#movietext").css("opacity", "1");

    if (isShareOpen) {
        isShareOpen = false;
        TweenMax.to($("#playbar"), .5, {
            height: $("#playbar").height() - 40,
            ease: Quad.easeOut
        });
        $(".share-input-box").remove();
    }


    // Initiation
    $("#movietext").clearQueue()
    $("#awardbutton").prop("disabled", true);

    $("#playbutton").html('<i class="fa fa-play"></i> PLAY');
    $("#playbutton").off();
    $("#playbutton").on("click", playVideo);

    // Music
    var randomSong = "sounds/" + songs[Math.floor(Math.random() * songs.length)];
    $("#audiosource").attr("src", randomSong);
    audio.pause();
    audio.load();

    // Write Stuff
    randomise();
    generateBrands();
    generateCombinations();

    // Make the Tweet	
    makeTweet();

    // Name Title
    $("#movietext").fadeOut("fast", function () {
        $("#movietext").text(award);
        $("#awardbutton").html('<i class="fa fa-random"></i> Randomise Again');
        $("#playbutton").show();
        $("#awardbutton").prop("disabled", false);
        $("#playbutton").prop("disabled", false);
    }).fadeIn("fast");
};

// Stop Double Click
$('#awardbutton').click(function () {
    if ($(':animated').length) {
        return false;
    }
});

function makeTweet() {
    webaddress = "http://grandprixgenerator.co.uk/u.php?";

    shareCode = "a=" + encodeURI(randomverb) + "&b=" + encodeURI(randomadjective) + "&c=" + encodeURI(randomadjectivetwo) + "&d=" + encodeURI(randomobject);
    shareCodeE = encodeURIComponent(shareCode);

    tweetCode = "a%3D" + encodeURI(randomverb) + "%26b%3D" + encodeURI(randomadjective) + "%26c%3D" + encodeURI(randomadjectivetwo) + "%26d%3D" + encodeURI(randomobject);

    tweetURL = webaddress + tweetCode;
    shareURL = webaddress + shareCode;

    titleEncoded = encodeURI(award);
    tweetURL = 'http://twitter.com/share?text=' + titleEncoded + '%20' + shareURL + '&url=%20' + '&hashtags=Cannes2015';
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

makeTweet();



// film lines

var storyboard = [];
var currentScreen = 0;

var imagePrefix = "images/";
var objectImage = "images/" + randomobject;

var delay = 2;
var imagePanningSpeed = 5;
var imagePanningDistance = -100;

function playVideo() {
    console.log('playVideo');
    $("#playbutton").html('<i class="fa fa-share-square-o"></i> SHARE');
    $("#playbutton").off();
    $("#playbutton").attr("onclick", "onShare()");
    
/*
ANIMATIONS:
- scaleIn
- scaleOut
- panLeft
- panRight
*/

    storyboard = [
		{
		    type: "text",
		    content: "In the UK alone, millions of <span class='bold'>" + randomobject + "</span> are still <span class='bold'>" + randomadjective + "</span>"
		},
		{
		    type: "image",
		    content: "images/" + randomobject + ".jpg",
		    animation: "scaleOut"
		},
		{
		    type: "text",
		    content: "And not only that"
		},
		{
		    type: "text",
		    content: "Many are also <span class='bold'>" + randomadjectivetwo + "</span>"
		},
		{
		    type: "image",
		    content: "images/" + randomobject + "2.jpg",
		    animation: "scaleIn"
		},
		{
		    type: "text",
		    content: "What can <span class='bold'>" + randombrand + "</span> do to help?"
		},
		{
		    type: "text",
		    content: "Introducing, The <span class='bold'>" + project + "</span> Project"
		},
		{
		    type: "text",
		    content: "We partnered with <span class='bold'>" + randompart + "</span>"
		},
		{
		    type: "text",
		    content: "To create <span class='bold'>" + randomthing + "</span>"
		},
		{
		    type: "text",
		    content: "It changed the world."
		}    
];


    //fade out initial text
    TweenMax.to($("#movietext"), 1, {
        alpha: 0,
        onComplete: startVideo
    });
}

function startVideo() {
    // Reset Audio
//    audio.load();
    audio.play();
    $('#audio').prop("volume", 1);
    //Preload Images
    preload([
        'images/' + randomobject + '.jpg',
        'images/' + randomobject + '2.jpg',
    ]);
    planNextScreen();

}



function planNextScreen() {
    if (storyboard[currentScreen].type == "image") {
        playImageTypeScreen();
    } else {
        playTextTypeScreen();
    }
}

function playTextTypeScreen() {
    $("#movietext").css("padding-left", "1.5em");
    $("#movietext").css("padding-right", "1.5em");

    $("#movietext").html(storyboard[currentScreen].content);
    TweenMax.to($("#movietext"), 1, {
        alpha: 1
    });

    TweenMax.delayedCall(delay, onScreenCompletehandler);
}

function playImageTypeScreen() {

    $("#movietext").css("padding-left", "0");
    $("#movietext").css("padding-right", "0");
    $("#movietext").text("");

    $("#movietext").append('<img id="image" width="' + ($("#movieframe").width() + 100) + 'px" src="' + storyboard[currentScreen].content + '"></img>');

    switch (storyboard[currentScreen].animation) {
    case "panLeft":
        TweenMax.to($("#image"), imagePanningSpeed, {
            x: imagePanningDistance,
            ease: Quad.easeInOut
        });
        break;

    case "panRight":
        TweenMax.fromTo($("#image"), imagePanningSpeed, {
            x: imagePanningDistance
        }, {
            x: 0,
            ease: Quad.easeInOut
        });
        break;

    case "scaleIn":
        TweenMax.fromTo($("#image"), imagePanningSpeed * 2, {
            scaleX: 1.25,
            scaleY: 1.25
        }, {
            scaleX: 1,
            scaleY: 1,
            ease: Quad.easeInOut
        });
        break;

    case "scaleOut":
        TweenMax.fromTo($("#image"), imagePanningSpeed * 2, {
            scaleX: 1,
            scaleY: 1
        }, {
            scaleX: 1.25,
            scaleY: 1.25,
            ease: Quad.easeInOut
        });
        break;
    }

    TweenMax.to($("#movietext"), 1, {
        alpha: 1
    });

    TweenMax.delayedCall(delay, onScreenCompletehandler);
}

function onScreenCompletehandler() {
    TweenMax.to($("#movietext"), 1, {
        alpha: 0,
        onComplete: function () {
            $("#image").remove();
            if (currentScreen == storyboard.length - 1) {
                showEndScreen();
            } else {
                currentScreen++;
                planNextScreen();
            }
        }
    });
}

var isShareOpen = false;

function showEndScreen() {
    onShare();
    $("#audio").animate({
        volume: "0"
    }, 5000);
    $("#movietext").html('<h3>Grand Prix Generator</h3><a style="margin-right: 1em" onclick="writeSubjectBrief()"><i class="fa fa-random"></i></a><a style="margin-right: 1em" href="https://twitter.com/home?status=Randomly%20generate%20a%20Grand%20Prix%20winning%20case%20study%20www.grandprixgenerator.co.uk%20%23GrandPrixGenerator"><i class="fa fa-twitter"></i></a> <a href="mailto:?&subject=Grand Prix Generator&body=Randomly%20generate%20a%20Grand%20Prix%20winning%20case%20study%20www.grandprixgenerator.co.uk%20"><i class="fa fa-envelope"></i></a>');
    $("#twitterpost").on("click", onShare);
    $("input[type='text']").click(function () {
        $(this).select();
    });
    TweenMax.to($("#movietext"), 1, {
        alpha: 1
    });
}


function onShare() {
    if (!isShareOpen) {

        isShareOpen = true;
        //console.log(window.tweeting, shareURL);
        $("#playbar").append('<input type="text" class="share-input-box" name="share">');
        $(".share-input-box").css("display", "none");
        $(".share-input-box").val(shareURL);
        TweenMax.to($("#playbar"), .5, {
            height: $("#playbar").height() + 40,
            ease: Quad.easeOut,
            onComplete: function () {
                $(".share-input-box").css("display", "block");
                TweenMax.to($(".share-input-box"), .5, {
                    alpha: 1,
                    ease: Quad.easeOut,
                    onComplete: function () {
                        $(".share-input-box").select();
                    }
                });
            }
        });
    }
}
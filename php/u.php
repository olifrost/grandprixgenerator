<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Cannes Grand Prix Generator</title>
	<meta name="description" content="Generate an award-winning idea" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@cannesgrandprix">
	<meta name="twitter:description" content="Win yourself a Grand Prix">
	<meta name="twitter:image" content="www.grandprixgenerator.co.uk/images/Cannes.png">
	
	<link href="https://fonts.googleapis.com/css?family=Raleway:300,600" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

	<link rel="stylesheet" href="style/award.css" />

<script type="text/javascript">
randomverb = "<?php echo $_GET['a'] ?>"; 
randomobject = "<?php echo $_GET['d'] ?>"; 
randomadjective = "<?php echo $_GET['b'] ?>"; 
randomadjectivetwo = "<?php echo $_GET['c'] ?>";
//randomSong = "<?php echo $_GET['e'] ?>"; 

</script>
	
</head>

<body>

<div class="container" id="unblocky">

<div class="row">
<div class="twelve column">
		<div id="title">
		 	<img id="canneslogo" src="images/cannes.png" alt="" />
			<h1>Grand Prix Generator</h1>
		</div>
</div>
</div>

<div class="row">
		<div class="twelve column">
			<audio id="audio" preload="none">
			<source id="audiosource" src="sounds/Sound3.mp3" type="audio/mpeg">
			Your browser does not support the audio element.
			</audio>


	<div id="movieframe">
			<div id="movietext"><?php echo $_GET["a"]; echo " "; echo $_GET["b"]; echo " "; echo $_GET["c"]; echo " "; echo $_GET["d"] ?></div>
	</div>
	
	<div id="playbar">
			<button type="button" class="button-primary" onclick="writeSubjectBrief()" id="awardbutton"><i class="fa fa-random"></i> RANDOMISE</button>
			<button type="button" class="button-primary" onclick="playVideo()" id="playbutton"> <i class="fa fa-play"></i> PLAY</button>
	</div>

		</div>
</div>

<div class="row">
<a href="http://oliandjosie.com" class="reference">Oli + Josie
</div>
	

</div>


</div>

<script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
<script src="scripts/main.js" type="text/javascript"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-64237540-1', 'auto');
  ga('send', 'pageview');
</script>

</body>
</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Grayscale - Start Bootstrap Theme</title>

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet"
          type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->


    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/grayscale.css" rel="stylesheet">
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

<!-- Navigation -->
<?php include("views/nav.php"); ?>
<!-- Intro Header -->
<header id="hero" class="intro">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <div class="intro-body">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="hero-area sc-content-intro">
                        <h1 class="brand-heading">Grayscale</h1>
                        <p>A free, responsive, one page Bootstrap theme.
                            <br>Created by Start Bootstrap. Test</p>
                    </div>
                    <a href="#about" class="btn btn-circle page-scroll">
                        <i class="fa fa-angle-double-down"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- About Section -->
<?php include("views/home.php"); ?>

<!-- Download Section -->
<section id="download" class="content-section text-center">
    <div class="download-section">
        <div class="container">
            <div class="col-lg-8 col-lg-offset-2 download sc-content-download">
                <h2>Download Grayscale</h2>
                <p>You can download Grayscale for free on the preview page at Start Bootstrap.</p>
                <p class="btn-transparent"><a href="http://startbootstrap.com/template-overviews/grayscale/">Visit
                    Download Page</a></p>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="container content-section text-center">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 sc-content contact">
            <h2>Contact Start Bootstrap</h2>
            <p>Feel free to email us to provide some feedback on our templates, give us suggestions for new templates
                and themes, or to just say hello!</p>
            <p><a href="mailto:feedback@startbootstrap.com">feedback@startbootstrap.com</a></p>
        </div>
        <div style="clear:both;"></div>
        <div class="sc-content">
            <!--
           <img class="social" src="img/soc-btn-twitter.jpg">
           <img class="social" src="img/soc-btn-github.jpg">
           <img class="social" src="img/soc-btn-google.jpg">
-->

            <p class="social-facebook"><a href="#">Follow me</a></p>
        </div>
    </div>
</section>

<!-- Map Section -->
<div class="sc-content">

</div>

<!-- Footer -->
<footer>
    <div class="container text-center sc-content-footer">
        <p>Copyright © Your Website 2014</p>
    </div>
</footer>
<!-- jQuery -->
<script src="js/jquery.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>
<!-- Plugin JavaScript -->
<script src="js/jquery.easing.min.js"></script>
<!-- Custom Theme JavaScript -->
<script src="js/grayscale.js"></script>

<!-- Sitecake admin pass autofill -->
<script type="text/javascript">
    if (typeof window.sitecakeGlobals !== 'undefined' && sitecakeGlobals.editMode === false) {
        var interval = setInterval(function () {
            var elements = [],
                toolbar = document.getElementById('sitecake-toolbox');
            if (toolbar) {
                clearInterval(interval);
                elements = toolbar.getElementsByTagName("input");
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].type === 'password') {
                        elements[i].value = "admin";
                        break;
                    }
                }
            }
        }, 2000);
    }
</script>
</body>

</html>
<?php 
require_once 'vendor/Mobile_Detect.php';
$detect = new Mobile_Detect;
?>

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
    <link href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" rel="stylesheet"  type="text/css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Yesteryear" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Crushed" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Charmonman|Grand+Hotel|Pacifico" rel="stylesheet">
    <!--<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">-->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->


    <!-- Bootstrap Core CSS -->
    <!--<link href="css/bootstrap.min.css" rel="stylesheet">-->
    <link href="css/style.css" rel="stylesheet">
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" class="site-loading">
<!-- Loading -->
<section id="site-loading-container">
    <img src="/img/loading-pig.gif"/>
    <div>waking up our developer...</div>
</section>

<!-- Navigation -->
<?php include("views/nav.php"); ?>

<!-- Content -->
<main>
    <section id="pagpe-loading" class="page-loading">
    </section>
    <section id="home" class="page-container active">
        <?php include('views/home.php'); ?>
    </section>
    <section id="schedule" class="page-container">
    </section>
    <section id="wedding-party" class="page-container">
    </section>
    <section id="registry" class="page-container">
    </section>
    <section id="travel" class="page-container">
    </section>
    <section id="rsvp" class="page-container">
    </section>
    <section id="faqs" class="page-container">
    </section>
</main>
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
<!-- Main JavaScript -->
<script src="js/main.js"></script>
<!-- Main JavaScript -->
<script src="js/home.js" async="async"></script>
</body>
</html>
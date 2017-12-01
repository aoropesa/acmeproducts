<?php

// show error reporting
error_reporting(E_ALL);

// set default time-zone
date_default_timezone_set('America/New_York');

// page is the current page, if there's nothing set, default is page 1
$page = isset($_GET['page']) ? $_GET['page'] : 1;

<?php
$_fp = fopen("php://stdin", "r");

function result($n, $d){
	$struct = array();
	$number = 0;

	foreach($n as $fucknkey => $fucknvalue){
		$struct[$fucknvalue] = true;
	}

	foreach($struct as $fuckskey => $fucksvalue){
		if($struct[$fuckskey + $d] === true){
			$number++;
		}
	}

	return $number;
}

$difference = explode(' ', fgets($_fp));
$difference = $difference[1];
$numbers = explode(' ', fgets($_fp));

fwrite(STDOUT, result($numbers, $difference));

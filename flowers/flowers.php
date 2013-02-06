<?php
$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */

function calculate($settings){
	$sum = 0;
	$already_bought = 0;
    $remaining = count($settings['prices']);

	rsort($settings['prices']);

	while($remaining > 0){
		$spliced = array_splice($settings['prices'], 0, $settings['people']);
		$spliced_length = count($spliced);
        $remaining -= $spliced_length;

		for($i = 0; $i < $spliced_length; $i++){
			$sum += (1 + $already_bought) * ($spliced[$i]);
		}

		$already_bought++;
	}

	return $sum;
}

$data1 = explode(' ', rtrim(fgets($_fp)));
$flowers = (int)$data1[0];
$people = (int)$data1[1];

$data2 = explode(' ', fgets($_fp));
$prices = array_map(function($n){
    return (int)$n;
}, $data2);

$arr = array(
    'flowers' => $flowers,
    'people' => $people,
    'prices' => $prices
);

fwrite(STDOUT, calculate($arr));

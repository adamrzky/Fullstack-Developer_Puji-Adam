<?php

function plusMinus($numbers) {

    if (empty($numbers)) {
        return "Error: Array tidak boleh kosong.";
    }

    $total = count($numbers);
    $positiveCount = 0;
    $negativeCount = 0;
    $zeroCount = 0;
    
    foreach ($numbers as $value) {
        if ($value > 0 && is_numeric($value)) {
            $positiveCount++;
        } elseif ($value < 0 && is_numeric($value)) {
            $negativeCount++;
        } else {
            $zeroCount++;
        }
    }

    return number_format($positiveCount / $total, 6, '.', '') . "\n" .
           number_format($negativeCount / $total, 6, '.', '') . "\n" .
           number_format($zeroCount / $total, 6, '.', '') . "\n";
}
$results = plusMinus([-4, 3, -9, 0, 4, 1]);
echo $results;

?>

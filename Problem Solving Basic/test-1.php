<?php

function miniMaxSum($numbers) {

    if (count($numbers) != 5) {
        echo "Array harus memiliki minimal 5 elemen.";
        return; 
    }

    $totalSum = array_sum($numbers);

    sort($numbers);

    $minSum = $totalSum - $numbers[4]; 
    
    $maxSum = $totalSum - $numbers[0]; 

    return ($minSum . " " . $maxSum);
}




$result = miniMaxSum([1, 2, 3, 4, 5]);
// $result = miniMaxSum([1, 3, 5, 7, 9]);
echo $result; 




?>

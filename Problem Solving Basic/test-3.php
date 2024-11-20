<?php

function timeConversion($s) {

    if (strlen($s) != 10 || !in_array(substr($s, -2), ['AM', 'PM'])) {
        return "Format waktu tidak valid";
    }

    $period = substr($s, -2); 
    $time = substr($s, 0, 8); 

    list($hours, $minutes, $seconds) = explode(':', $time);

    if ($period == 'AM') {
        if ($hours == '12') { 
            $hours = '00';
        }
    } else { // PM
        if ($hours != '12') { 
            $hours = (int) $hours + 12;
        }
    }

    return sprintf('%02d:%s:%s', $hours, $minutes, $seconds);
}

echo timeConversion("07:05:45PM") . "\n";  

?>

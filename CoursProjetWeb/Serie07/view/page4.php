
<body>
<h1>Exo 1</h1>
<?php
$jours = array('Lundi','Mardi','Mercredi','jeudi','Vendredi','samedi','Dimanche');
echo '<table border = "1">';
echo'<thead>';
echo '<tr>';
echo '<th>Jour</tr>';
echo '</tr>';
echo '<tbody>';
for ($i=1;$i<7;$i++)
    {
        echo '<tr>';
        echo '<td>'.$jours[$i] .'</td>';
        echo '</tr>';
    }
echo '</tbody>';
echo '</table>';
?>
<h1>Exo 2</h1>
<table border = "1">
<tbody>
    <thead>
    <tr>
        <th>Jour</th>
        <th>Ce que je fais</th>
    </tr>
    </thead>
    <tbody>
<?php
$jours = array();
$jours ['lundi']='ecole';
$jours ['mardi']='ecole';
$jours ['mercredi']='ecole';
$jours ['jeudi']='ecole';
$jours ['vendredi']='ecole';
$jours ['samedi']='maison';
$jours ['dimanche']='maison';
foreach ($jours as $clef => $valeur)
{
    echo '<tr>';
    echo '<td>'.$clef.'</td>';
    echo '<td>'.$valeur.'</td>';
    echo '</tr>';
}
?>
    </tbody>
</table>
<h1>Exo 3</h1>
<table border = "1">
    <thead>
    <tr>
        <th>Semaine</th>
        <th>Jour</th>
        <th>Ce que je fais</th>
    </tr>
    </thead>
    <tbody>
<?php
$jours = array();
$jours ['lundi']='ecole';
$jours ['mardi']='ecole';
$jours ['mercredi']='ecole';
$jours ['jeudi']='ecole';
$jours ['vendredi']='ecole';
$jours ['samedi']='maison';
$jours ['dimanche']='maison';
$semaine = array();
for ($i=0;$i<42;$i++)
{
    $semaine[$i] = $jours;
}
foreach ($semaine as $nombre => $jours)
{
    echo '<tr>';
    echo '<td rowspan = 7 >'.($nombre +1).'</td>';
    $i = 0;
    foreach ($jours as $clefs => $valeurs)
    {
        if ($i > 0)
        {
            echo '<tr>';
        }
        echo'<td>'.$clefs.'</td>';
        echo '<td>'.$valeurs.'</td>';
        echo '</tr>';
        $i++;
    }
}
?>
    </tbody>
</table>

<body>
<h1>Exo 1</h1>
<?php
for ($i=1;$i<11;$i++)
{
    echo '<p>Ceci est la ligne '.$i.'.<br\></p>';
}
?>
<h1>Exo 2</h1>
<?php
for ($i=1;$i<11;$i++)
{
    echo '<li>Ceci est la ligne '.$i.'.</li>';
}
?>
<h1>Exo 3</h1>
<?php
echo '<p> <br\></p>';

echo'<table border = "1">';
echo'<thead>';
echo'<tr>';
echo'<th>#</th>';
echo'<th>Libellé</th>';
echo'</tr>';
echo'</thead>';
echo'<tbody>';

for ($i=1;$i<11;$i++)
{
    echo '<tr>';
    echo '<td>'.$i.'</td>';
    echo '<td>Ceci est la ligne '.$i.'</td>';
    echo '</tr>';
}

echo'</tbody>';

echo'</table>';
?>
<h1>Exo 4</h1>
<?php
echo '<p> <br\></p>';
echo'<table border = "1">';
echo'<thead>';
echo'<tr>';
echo'<th>#</th>';
echo'<th>Libellé</th>';
echo'</tr>';
echo'</thead>';
echo'<tbody>';

for ($i=1;$i<11;$i++)
{
    if (($i%2)==0)
    {
        echo '<tr>';
        echo '<td style="color:red;">'.$i.'</td>';
        echo '<td style="color:red;">Ceci est la ligne '.$i.'</td>';
        echo '</tr>';
    }
    else
    {
        echo '<tr>';
        echo '<td style="color:blue;">'.$i.'</td>';
        echo '<td style="color:blue;">Ceci est la ligne '.$i.'</td>';
        echo '</tr>';
    }
}

echo'</tbody>';
echo'</table>';

?>

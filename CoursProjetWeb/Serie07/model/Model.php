<?php
require_once ('Read.php');
class Model implements Read
{
    protected PDO $connection;
    protected int $id=0;
    public string $table;
    public $data;
    public bool $dump_sql = false;
    protected string $user =  'root';
    protected string $pass = 'a1B2c3D4e5F6';



$connection  = new PDO('mysql:host=localhost;dbname=test', $user, $pass);
}
public static function load()
{
   $m = new Model();
    return $m;
}
}
?>
<?php
namespace AdvDesigner\Logic\Database;
include '../config.inc.php';

class Connection 
{
    public function connect()
    {
        echo $conf["db_hostname"];
    }
}

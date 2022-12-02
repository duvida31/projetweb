<?php

interface Read
{
    public function read($fields=null,$where = '',$join = '',$orderBy = '');
}
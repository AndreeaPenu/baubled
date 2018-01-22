<?php
  $cmd = 'sudo python python/baubled.py';
  if(isset($_GET['checkbox'])){
    $cmd .= ' -o '$_GET['checkbox'];
  }
  if(isset($_GET['effect'])){
    $cmd .= ' -e ' . $_GET['effect'];
  }
  if(isset($_GET['color'])){
    $cmd .= ' -c ' . $_GET['color'];
  }
  exec($cmd);

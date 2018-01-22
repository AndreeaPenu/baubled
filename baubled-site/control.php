<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Control</title>
  </head>
  <body>
    <?php $c =  $_POST['checkbox'] ?>
    <?php if(isset($c)): ?>
      <p>Set: <?= $c ?></p>
    <?php endif ?>
  </body>
</html>

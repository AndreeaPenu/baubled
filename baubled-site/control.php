<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Control</title>
  </head>
  <body>
    <?php if(isset($_POST['checkbox'])): ?>
      <p>Set: <?= $_POST['checkbox']  ?></p>
    <?php endif ?>
  </body>
</html>

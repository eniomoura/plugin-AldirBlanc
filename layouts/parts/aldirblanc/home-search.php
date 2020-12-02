
<div class="box">
    <h1><?= $titulo ?></h1>
    <p style="text-align:justify">
        <?= $texto ?>
    </p>
    
    <a style="visibility:hidden;" class="btn btn-accent btn-large" href="<?php echo $app->createUrl('aldirblanc') ?>"><?= $botao ?></a>
</div>
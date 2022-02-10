<script>
</script>

<div class="container">
    <div class="grid-row try-1">
        <div class="grid-column letter-1"></div>
        <div class="grid-column letter-2"></div>
        <div class="grid-column letter-3"></div>
        <div class="grid-column letter-4"></div>
        <div class="grid-column letter-5"></div>
    </div>
    <div class="grid-row try-2">
        <div class="grid-column letter-1"></div>
        <div class="grid-column letter-2"></div>
        <div class="grid-column letter-3"></div>
        <div class="grid-column letter-4"></div>
        <div class="grid-column letter-5"></div>
    </div>
    <div class="grid-row try-3">
        <div class="grid-column letter-1"></div>
        <div class="grid-column letter-2"></div>
        <div class="grid-column letter-3"></div>
        <div class="grid-column letter-4"></div>
        <div class="grid-column letter-5"></div>
    </div>
    <div class="grid-row try-4">
        <div class="grid-column letter-1"></div>
        <div class="grid-column letter-2"></div>
        <div class="grid-column letter-3"></div>
        <div class="grid-column letter-4"></div>
        <div class="grid-column letter-5"></div>
    </div>
    <div class="grid-row try-5">
        <div class="grid-column letter-1"></div>
        <div class="grid-column letter-2"></div>
        <div class="grid-column letter-3"></div>
        <div class="grid-column letter-4"></div>
        <div class="grid-column letter-5"></div>
    </div>
    <div class="grid-row try-6">
        <div class="grid-column letter-1"></div>
        <div class="grid-column letter-2"></div>
        <div class="grid-column letter-3"></div>
        <div class="grid-column letter-4"></div>
        <div class="grid-column letter-5"></div>
    </div>
</div>

<style>
    .container{
        padding:8px 0;
        display:grid;
        justify-content: center;
        align-content: center;
        grid-template-rows: repeat(6,50px);
        gap:5px;
    }
    .grid-row{
        display:grid;
        grid-template-columns: repeat(5,50px);
        gap:5px;
        
    }
    .grid-column{
        border: 1px solid var(--color-tone-4);
    }
</style>
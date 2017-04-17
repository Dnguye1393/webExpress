<script>
$('li').mouseover(function(e)
{
    e.stopPropagation();
    $(this).addClass('currentHover');
});

$('li').mouseout(function()
{
    $(this).removeClass('currentHover');
});
</script>

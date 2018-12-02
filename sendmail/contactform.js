jQuery(document).ready(function($) {

$(".ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "sendmail/contact.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<p class="notification_error">Мы ответим Вам в ближайшее время</p>';
$(".fields").hide();
} else {
result = msg;
}
$('.note').html(result);
}
});
return false;
});
});
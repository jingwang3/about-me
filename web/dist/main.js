

function fbLogout() {
    $('#signedIn').show();
  $('#signedOut').hide();
  FB.logout();
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function() {
    window.fbAsyncInit = function() {
        FB.init({
            appId: '658141450952100',
            xfbml: true,
            version: 'v2.3'
        });
        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            FB.api('/me', function(response) {
                $('#btnText').text(response.name).addClass('btn-'+response.gender);
            });
            $('#signedIn').show();
          }else{
            $('#signedOut').show();
          }
        });
    };
    $('#signInBtn').on('click', function(e) {
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                console.log('Logged in.');
            } else {
                FB.login(function(response) {
                    FB.api('/me', function(response) {
                        $('#btnText').text(response.name).addClass('btn-'+response.gender);
                    });
                    $('#signedIn').hide();
                    $('#signedOut').show();
                    // handle the response
                }, {
                    scope: 'public_profile,email'
                });
            }
        });

    });
});;$(document).ready(function() {
	$('.infowindow').on('click', '.arrow', function(e){
		console.log(this);
		$('.infowindow.active').removeClass('active');
	});
	$('.infowindow').on('click', '.summary-box', function(e){
		$(this).parent().addClass('active');
	});
});
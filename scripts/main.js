(function() {
	document.webL10n.ready(function() {
        var videoUrl = 'https://www.youtube.com/watch?v=j6pwTk4D8WI',
        shareDescr = document.webL10n.get('share-description'),
        encodedDescr = shareDescr.replace(/#/g, '%23'),
        sharer = new Share('.share-btn',{
          	width: '110px',
        	title: document.webL10n.get('share-title'),
        	url: videoUrl,
        	description: shareDescr,
        	ui: {
        	    button_text: document.webL10n.get('share'),
        	},
        	networks: {
        	    twitter: {
        	        description: encodedDescr
        	    },
        	    facebook: {
        	        description: encodedDescr
        	    },
        	    email: {
        	        description: shareDescr + videoUrl
        	    },
        	    pinterest: {
        	        enabled: false
        	    },
        	    google_plus: {
        	        enabled: false
        	    }
        	}
        });
        var lang = document.webL10n.getLanguage().substring(0, 2);

        if(lang=="hi") {
            document.getElementById('language').value="hi";
        }
        if(lang=="ur") {
            document.getElementById('language').value="ur";
        }
        smoothScroll.init({
            speed: 700,
            easing: 'easeInOutCubic'
        });
        $('#tabzilla').on('click', function() {
          ga('send', 'event', 'link', 'click', 'tabzilla');
        });
        $('a[href="#online"]').on('click', function() {
          ga('send', 'event', 'link', 'click', 'online');
        });
        $('a[href="#offline"]').on('click', function() {
          ga('send', 'event', 'link', 'click', 'offline');
        });
        $('#download-avatar').on('click', function() {
          ga('send', 'event', 'link', 'click', 'download-avatar');
        });
        $('#firefox-affiliate').on('click', function() {
          ga('send', 'event', 'link', 'click', 'firefox-affiliate');
        });
        $('#download-wallpapers').on('click', function() {
          ga('send', 'event', 'link', 'click', 'download-wallpapers');
        });
        $('#firefox-badge').on('click', function() {
          ga('send', 'event', 'link', 'click', 'firefox-badge');
        });
        $('#download-signs').on('click', function() {
          ga('send', 'event', 'link', 'click', 'download-signs');
        });
        $('.offline-video').delegate('li','click', function() {
          var type = $(this).data('networks');
          if (type == 'twitter') {
            ga('send', 'event', 'li', 'click', 'offline-video-twitter');
          } else if (type == 'facebook') {
            ga('send', 'event', 'li', 'click', 'offline-video-facebook');
          } else if (type == 'email') {
            ga('send', 'event', 'li', 'click', 'offline-video-email');
          }
        });
      }, false);
}());

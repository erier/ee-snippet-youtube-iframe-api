var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// create player variable(s) for blog posts categorized under 'video'
{exp:channel:entries channel="blog" category="1" disable="member_data|pagination"}{blog-video}
	var player{entry_id};
{/blog-video}{/exp:channel:entries}

function onYouTubeIframeAPIReady() {
	// create YT player video elements for each blog post categorized under 'video'
{exp:channel:entries channel="blog" category="1" disable="member_data|pagination"}
	{blog-video}
	$('#video-{url_title}').click(function() {
    player{entry_id} = new YT.Player('video-{url_title}', {
      height: '280',
      width: '500',
      videoId: '{blog-video-unlisted}{blog-video-embed:id}',
      events: {
        'onReady': onPlayerReady
      }
    });

    $(".media-wrap").fitVids();
  });
  {/blog-video}
{/exp:channel:entries}
}

// video player ready
function onPlayerReady(event) {
  event.target.playVideo();
}
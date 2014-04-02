ExpressionEngine Snippet | YouTube iframe API
=============================================

Requirements
------------

Assuming the following ExpressionEngine addons are installed:
* Matrix
* WYVERN Video

Assuming the following ExpressionEngine settings:
* ``channel_short_name`` = blog
* category ID = 1
* ``{blog-video}`` = Matrix tag
* ``{blog-video-embed}`` = WYVERN video tag

What it Does
------------
Using the [YouTube iframe API](https://developers.google.com/youtube/iframe_api_reference) we can create multiple 'on click' YouTube video players on a single page.

Notice that there are two instances of ``{exp:channel:entries}`` below. This is because the ``onYouTubeIframeAPIReady()`` function can only be called once. Because of that, all the entries assigned to category 1 will be listed inside of the ``onYouTubeIframeAPIReady()`` function.

Each video player must have a unique player variable and element ID associated with them, therefore we assign the EE ``{entry_id}`` variable to appropriate pieces of the script.
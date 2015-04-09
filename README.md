#v1.2

Unuglied the code!

#Get Older Versions

https://github.com/ilovecode1/video.js-del-plugin/commits/bc019a4c06b297f71457db29936a781388efa4b9/del.js

#Update

We are aware that there is a bug with ```this.requestFullScreen();``` but, we left it so we do not have to change anything when it's changed. https://github.com/videojs/video.js/issues/2013

#What is Video.js?

Video.js is a extendable, custom HTML5 Video player. Learn more at http://videojs.com

#What does Doing Ending Leaving mean?

##Doing

* It auto starts the video
* Makes it go full screen (you can change that part).

##Ending

*Turns of fullscreen

##Leaving

*It Deletes the video from existance.

#How to use it?

* You can use for a intro to a website,
* A popup ad,
* And other reasons!

# setup

##1

````
<script src="path/to/del.js">
````

##2

```
<script>
del("yourVideoName",true /*true if you want it to auto fullscreen false if not!*/)
</script>
```

##3

There is no 3rd step

#In the future

1. Add more custom features
2. Add a option for full screen that you can disable making go of full screen (Be Careful With That One!)

---
title: "Somewhat Progressive Web Apps"
published: true
description: "Continuing with my seemingly obsession with web apps on the desktop, let's explore another few routes to success, their pros and cons."
tags: ["pwa"]
canonical_url: "https://gregbenner.life/somewhat-progressive-web-apps/"
//cover_image: https://direct_url_to_image.jpg
---

In my last [post](https://gregbenner.life/web-view-apps-on-your-os/)  I explored a few ideas for using desktop native webviews to contain a webapp. There are some pros and cons to said approach, off the top of my head I'd say the pros are smaller app sizes (than what I'm going to share later in the post) and portability of the app; you can distribute it. A con of that approach might be if you just need a PWA you can open chrome > click more tools > create shortcut. This approach will yield a very small app size, but no portability. 

So let's explore an interesting tool I found that might be the right solution for your use case. [PWABuilder](https://www.pwabuilder.com/)
![pwa builder](https://www.pwabuilder.com/_nuxt/img/new-logo.39c5508.svg)
From what I gather is using a somewhat similar approach, using native code like swift on macos to power a view on the os. It's pretty nifty that you can go to the site enter any url and poof you get a PWA for desktop or android. 

Well not exactly, you will get varying mileage from the url you enter depending on how well it's setup as a PWA. something like mobile.twitter.com will work very well, where other sites will need some help. I won't cover too much of setting up a PWA in this post but something like this https://tomitm.github.io/appmanifest/ will get you most of the way; plus serving your site over https and having a [service worker.](https://developers.google.com/web/tools/workbox)

![enter image description here](https://res.cloudinary.com/https-gregbenner-life/image/upload/v1596651485/Screenshot_from_2020-08-05_14-16-29_xftnxa.png)

Next steps are to Build your PWA!

![enter image description here](https://res.cloudinary.com/https-gregbenner-life/image/upload/v1596651621/Screenshot_from_2020-08-05_14-20-01_xo6cuk.png)

Well not exactly, whichever platform you choose to download, I tried android, windows, and macos; the instructions are kind of missing.

> MacOS
> You can use Xcode to build this package to produce an app that runs on MacOS.

> Windows
> You'll get a side-loadable version of your PWA (requires Win10 in dev mode) to test your PWA right away. To generate an AppX PWA package and submit to the Microsoft Store, click here

Ok for macOS you can open /projects/mac/MacOSpwa.xcodeproj with xcode you will also need to move the manifest.json (/projects/mac/source/app/src/main/assets/) and files into a folder called PWAinfo, since there is a bug currently https://github.com/pwa-builder/PWABuilder/issues/1008 I found that out the hard way. Click the > arrow to build and run the project. A .app file is also generated for you.

For windows there was a few more steps [missing](https://github.com/pwa-builder/PWABuilder/issues/1007). Firstly you need to [enable "Developer mode"](https://www.howtogeek.com/292914/what-is-developer-mode-in-windows-10/) I never heard of that before. What helped me with the rest of the steps was [this post](https://medium.com/@ricardobokove/test-your-pwa-generated-by-pwabuilder-on-windows-10-68a63b513975) You will need to run **test_install.ps1** in powershell, you will 100% get an error "Missing AppxManifest.xml" open the .ps1 file and update the location of AppxManifest.xml to the full path `C:/Users...` run the script again and you should have a sort of PWA on windows.

I haven't tried it but theroeticlly if you have a windows developer license you can skip all the above and submit it to the store directly from PWA builder by clicking generate under the the download section and filling out the fields.

Comments and Questions are appreciated! https://twitter.com/cactusanddove/status/1291086540672774145

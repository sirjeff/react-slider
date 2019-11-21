# One by One Gallery

A simple React with Slick slider gallery designed for small screen devices, yet compatible with all screen sizes.

## What is it?
A one page app. that displays a bunch of images, one at a time.

## How do I use it?
Navigate with a swipe left or right using mouse or finger.

Alternatively you can click the dots, the arrows, or use your keyboard arrow keys.

## What's it for?
I built it as an excuse to use React and Slick.

I've created my own personal Graphics Portfolio using this app:
[https://cv.omi.nz/gfx/](https://cv.omi.nz/gfx/)

## Can I install it?
Sure you can.

(Note: I am using Windows 7 and my browser of choice(ness) is Vivaldi ...)

### Prerequisites
You will need :
- node.js
- npm
- create-react-app

I'm using :
- node v12.2.0
- npm 6.10.2
- create-react-app 1.5.2


Download Node.js (this will also install npm) from here:

[https://nodejs.org/en/](https://nodejs.org/en/)

Then you can install `create-react-app` globally on command line with:

`npm i -g create-react-app`


### Install / Setup
In your terminal (or command line) change directory to you project repository or one directory up from where this app will be installed.
i.e.

`cd /home/react`

(my React projects are in c:/home/react)

Then create the app. which I'm calling "gfx":

`create-react-app gfx `

After some time, if all goes well, the node files will install with a clean project ready to go.
It all resides in the "gfx" directory `create-react-app` created for you.
Go into this directory ...

`cd gfx`

Now install the required components :

`npm install react-slick --save`

`npm install --save styled-components`

Okay you're done so far with installing a blank app. You can view it by starting the npm mini server :

`npm start`

This should automatically open a page in your default web browser at :

[http://localhost:3000](http://localhost:3000)

You should see the default React test page.

Stop the server, I use CTRL-C, or just close the terminal window.

Now you have React ready to go, you'll need to download my project files from Github.

## Install these project files...

Go here and download the zip into your project directory:

[https://github.com/sirjeff/react-slider](https://github.com/sirjeff/react-slider)

Remove the 'src' and 'public' directories from your project.

Now open the zip file and go into the react-app directory.

Drag 'src' 'public' and '.env' into your project directory.

Run the server again from command line (terminal) : `npm start`

And there you have it :)

-- more details and maybe some pictures coming soon!

## Frequently asked Stuff (FaS)
### Is the code in your Graphical Portfolio the same as this repo?
About 90% is the same. 
It was 100% but I've optimised the code for production.

Also any changes to this repo do not go into the portfolio anymore .... because it's live already.

### What's with all the nesting?
Glad you asked.

Well originally images were added via the `img` tag and there was an overload of code to have the images resize to fit.

Many `div` tags with set widths and heights and, well it was getting totes cray cray.

It was all to do with the image aspect ratio not matching the screen dimensions.

Eventually I reverted back to using a background image and the CSS `background-size: contain` to scale the image nicely and make it fit.

I only went down the `img` path because I thought the `image-rendering` CSS did not work on background images. But it does - so yah!!

So all the nested `div` tags and CSS for it are all still there, just-in-case you really want them. It's easier to remove than it is to add ;)


## Helpful Links
- [https://kenwheeler.github.io/slick/](https://kenwheeler.github.io/slick/) : Slick, the last carousel you'll ever need
- [https://react-slick.neostack.com/docs/get-started/](https://react-slick.neostack.com/docs/get-started/) : React Slick



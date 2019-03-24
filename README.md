## Task
Create a project for the job opening at Barrel that follows their guidelines and design.

## System Design
For this project, I decided to use a ReactJS Front End with a headless Wordpress backend cms. To accomplish that, I would access wordpress's Rest Api to gather data. The end goal was to have the backend hosted at /cms, keeping the project isolated to one server. 

## Challanges
Pantheon's web gui did not support static sites. In fact, I contacted Pantheon and the support team couldn't give me an answer either. But I was determinned to reach my system design goal, and continued to research. I was able to accomplish this by installing Terminus (On windows, which was not supported), and running a command to spin up an instance without the default cms's installed. I then installed wordpress directly into the cms folder, and it was easy from there.

## What is not finished
More responsive css, favicon, header navigation, footer.
With about three additional hours, those should all be finished, and I might finish them anyways because the project was exciting to implement a cms.

## How to view
Front End: http://dev-test-barrel-tim-terminus.pantheonsite.io/
Front End Code: https://github.com/bucketsec/Barrel-DeveloperTest-FrontEnd
Back End: http://dev-test-barrel-tim-terminus.pantheonsite.io/cms/wp-admin

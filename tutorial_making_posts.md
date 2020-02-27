---
layout: post
date:   2020-01-01
image: "/template_site/images/csr_thumbnail.png"
title:  "Tutorial - how to make a post on this site"
author: ""
---

This document contains instructions for how to create a page on this website.

The template for this website was developed by the [Columbia Center for Spatial Research](c4sr.columbia.edu) (CSR) based on the Minima [Jekyll](https://jekyllrb.com/) theme in order to facilitate creating collaborative student publications in our seminars each year.

This document is written as a tutorial for students taking courses that use this template to produce a collaborative web publication.

It will walk you through how to compose a post using a simple markup language called markdown. And then how to upload it to this website which is hosted on GitHub.

The class website you will collectively contribute to is built using a static site generator called [Jekyll](https://jekyllrb.com/). For more on what Jekyll is or how to use it to build your own website please refer to this great tutorial from the [Programming Historian](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages).
For more information on how the CSR template is set up please see the README [here](/README.md).

This tutorial accomplishes two things:
  - you will become familiar with editing and composing documents using markdown syntax.
  - you will create a template document for your final project that you can edit in order to publish your final project.


#### Before you begin
**Create a GitHub Account**  
1. visit [github.com](https://github.com/) and sign up for a Github account if you do not already have one
2. ask to be added as a contributor to the repository for your class's website if you are not already
**Download and install the text editor of your choice**
1. to create your post you will compose a plain text document. To do this you can use Notepad on Windows or Text Editor on Mac, however there are a number of great text editors out there that will help make things easier. [Atom](https://atom.io/) or [Sublime Text](https://www.sublimetext.com/) are two good options. Download and install one of these if you would like.

#### Step 1: familiarize yourself with the structure of the site
1. in a browser open both the GitHub repository and the class website (your professor should have given you links to both). The two pages will look something like this:
![screenshot of repository and class website]
1. this GitHub repository is currently hosting a simple website. If you have already been added as a collaborator to the repository, click on the repository's `Settings` and scroll down to the `GitHub Pages` section locate the URL of the site. Or ask the owner of the repository to send you the link. Navigate to this website to take a look at it.
2. the simple website you just visited above is being hosted by this repository. Scroll up to look at the structure of the folders and files. Key things to note here:
    - the `_includes`, `_layout`, `_sass`, and `assets` folders contain the files that define the CSR template. You will not need to change any files inside these folders
    - the `images` folder is where any images that you include in the website should be placed
    - the `_posts` folder is what contains the markdown files that will become individual pages on the website.

#### Step 2: compose a new post
1. open the `_posts` folder. Each page on the website is made by producing a new file in the `_posts` folder of the repository.
2. open one of the `.md` files and select `Raw` which will allow you to view the unformatted file
3. this is written in markdown, and has a special header which is used by the template to (1) format the page's title & author, (2) populate the homepage of the site with an image, and title. The header looks something like this:
          ```
          ---
          layout: post
          date:   2020-01-01
          image: "/your-site-name/images/csr_thumbnail.png"
          title:  "Template Post: Title of Your Final Project"
          author: "Names Of Everyone In Your Group"
          ---
          ```
4. the body of the post has sample text showing the simple markdown syntax. [This webpage](https://guides.github.com/features/mastering-markdown/) is also a good resource as it provides a comprehensive guide to markdown syntax
5. open the text editor of your choice (we suggest either [Atom](https://atom.io/) or [Sublime Text](https://www.sublimetext.com/), download one of these if you haven't already)
6. create a new empty file in your text editor
7. **Copy** all of the raw markdown from `.md` file in this repository and **paste** it in to this empty file.
8. Save the file in the following format `2020-01-03-lastname.md`
9. once you save the file your text editor will recognize you are writing in markdown and will start highlighting the special syntax of this language:
![syntax highlight]
10. now we will edit this file to get familiar with how to write in markdown
11. edit the document's header (the area highlighted in a magenta dashed line above).
    - layout should stay labeled as post: `layout: post`
    - change the date to today's date
    - leave the image as-is for now
    - change the title to your uni:  `title:  "xyz2222"`
    - change the author to your name: `author: "Jane Adams"`

12. edit the document to practice formatting text and including links. Write in the document so you have:
    - a paragraph of text (use your final project proposal)
    - a word in bold,
    - a word in italics
    - a link to the github repository for the tutorials for this class
    - (optional) an iframe with the webmap you created in tutorial 4 or 5 embedded

13. embed an image in your post. This is a two step process
**Step one:** you must upload your image to a folder in the class website Github repository.
**Step two:** you must link to that image from within your post.

    1. find an image that is in the [public domain](https://en.wikipedia.org/wiki/Public_domain) or for which you have image rights.  
    2. save the image with a reasonable file name (you might as a class want to decide on a convention here like `lastname_description.jpg`)
    3. upload the image to the `images` folder in the Github repository for your site
    ![image upload]
    4. After dragging the image file you have chosen into the uploader, enter a descriptive caption for your commit, and select `Commit Changes`
    5. Check the folder to verify that the image was uploaded
**Now we'll embed the image in to the body of your post.**
    1. You'll use the following syntax:  `![description of image](/your-site-name/images/lastname_description.jpg)` replace `your-site-name` with the name of the repository for the site, and replace `lastname_description.jpg` with the file name of the image you just uploaded
    - note: the information between the [ ] contains a description of the image that gets used by screen readers to make your website more accessible
    - the information in the () contains the path to the image within our website
      **Note** the file path must start with a `/` i.e. it must be something like `/your-site-name/images/` if you do not include the `/` then the link will not work.
14. save your post
15. now replace the thumbnail image that appears on the course website landing page. This image, currently a placeholder, is defined in the header of your post. To change it you will need to first choose and upload an image, and then change the link in the yaml header

    1. choose an image that is representative of your project, crop it to have a **square** aspect ratio that is at least 300px wide

    2. just like you did in step 13 above upload this image to the `images` folder

    3. update the yaml header of your post, replace the path in the `image` field to match the repository name and file name of the square image you just uploaded to github. Just like above, replace `your-project-name` with the name of your site's repository, and replace `lastname_description2.png` with the name of the square image you just uploaded:
    ```
    ---
    layout: post
    date:   2019-03-20
    image: "/your-project-name/images/lastname_description2.png"
    title:  "Provisional Title of Your Final Project"
    author: "Names Of Everyone In Your Group"
    ---
    ```
16. **Save your post**

#### Step 3: upload your post to the repository
Now we will `commit` this new post to the group repository which will mean that is becomes visible on the group website.

1. navigate to the `_posts` folder of the repository. And select `Upload Files`. Drag the markdown file containing your post to the window. Write a commit message, and commit your post
2. wait 1-2 minutes, then visit/refresh the class website URL. Your post should have appeared

#### Step 4: making changes to/editing your post
To update your post after you have made changes to your markdown file in your text editor:
1. Navigate to the `_posts` folder in the repository

2. Select `Upload Files` as you did in step 3 above. **Note: make sure that you did not change the name of your file**. Drag the markdown file containing your post into the window. Write a commit message and commit your post

3. Wait 1-2 minutes, then visit/refresh the class website URL. The updates to your post should have appeared

______________________________________________________________________________________________________________


Tutorial written by Dare Brawley, for *Conflict Urbanism: Puerto Rico Now*, a spring 2019 seminar offered by the [Center for Spatial Research](http://c4sr.columbia.edu). More information about the course is available [here](http://c4sr.columbia.edu/courses/conflict-urbanism-puerto-rico-now).


[syntax highlight]: tutorial_img/tutorial_1_syntax_highlight.png
[image upload]: tutorial_img/tutorial_2_image_upload.png
[screenshot of repository and class website]: tutorial_img/tutorial_0_twosites.png

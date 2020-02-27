## A simple jekyll template for course publications

This repository contains a template built using [Jekyll](https://jekyllrb.com/) and GitHub pages that can be used to create simple websites or class publications.

You can preview the template [here](https://centerforspatialresearch.GitHub.io/template_site/).

It was developed by the [Columbia Center for Spatial Research](c4sr.columbia.edu) (CSR) based on the Minima Jekyll theme in order to facilitate creating collaborative student publications in our seminars each year. Our goals were to create a framework that:
- uses static pages (rather than a database-driven system)
- could be easily customized
- is straightforward enough that it can be used by students with no prior experience making things on the web

In spring 2019 the template was used by the [Conflict Urbanism: Puerto Rico Now](puerto-rico-now.c4sr.columbia.edu/) seminar, taught by Laura Kurgan and Frances Negrón-Muntaner.

We are making this template available for others to adapt or use in their own courses.

In what follows we briefly outline how to adapt this template for your own use.

## Getting started

This guide was written for beginners. In it you will learn:
- how to clone the template to your own GitHub account and host it on GitHub pages
- the basic structure of a Jekyll site
- how to make posts and begin populating your site with material
Because this guide has beginners in mind, it has instructions for using GitHub's web interface to upload and make changes to files. If you are familiar with using GitHub via the command line please feel free to do this instead.

First, a few notes:
This template is built using Jekyll, but what is Jekyll? Briefly, Jekyll is a tool that creates static websites from plain text. *The Programming Historian*'s [Building a static website with Jekyll and GitHub Pages](http://programminghistorian.org/lessons/building-static-sites-with-jekyll-GitHub-pages) is a great introduction to Jekyll. And Alex Gil's [series of posts](https://www.chronicle.com/blogs/profhacker/jekyll1/60913) in the Chronicle of Higher Education are a great overview of the motivations for using Jekyll in university contexts.

The key information to know at this point is that you and your students write material in simple markdown syntax and Jekyll turns this into an HTML website.

This tutorial does not assume any prior knowledge of HTML/CSS, it does however assume a basic familiarity with the functionality of GitHub, and that you have a GitHub account. Create one now [here](https://GitHub.com/) if you don't have one already.  

## Setting up your site

### Step 1: familiarize yourself with the structure of the site
1. Review the template_site here: [centerforspatialresearch.github.io/template_site/](https://centerforspatialresearch.github.io/template_site/)
    - on the homepage, notice that there is (1) a header with a title, and link to an about page, (2) a grid of 'posts',and (3) a footer with the name and other key details about the site
    - in a sample post, notice that there is a central column of text with simple formatting and inline images and maps
2. This website is being powered by content contained in [this](https://github.com/CenterForSpatialResearch/template_site) repository.

    - the `_includes`, `_layout`, `_sass`, and `assets` folders contain the files that define the CSR template. You do not need to change any files inside these folders
    - the `_posts` folder is what contains the markdown files that will become individual pages on the website.
      - open the `_posts` folder and you'll see that each individual `.md` file here is one page on the template website
      - open one of the `.md` files and select `Raw` which will allow you to view the unformatted file
          - this is written in markdown, and has a special header which is used by the template to (1) format the page's title & author, (2)populate the homepage of the site with an image, and title. The header looks like this:
          ```
          ---
          layout: post
          date:   2020-01-01
          image: "/template_site/images/csr_thumbnail.png"
          title:  "Template Post: Title of Your Final Project"
          author: "Names Of Everyone In Your Group"
          ---

          ```
    - the `images` folder is where any images that you include in the website should be placed
    - the `about.md` file is where you can add any text that will go in the 'about'
    - the `_config.yml` file is where key information about your site gets set (like the title, and all of the information contained in the site's footer)

That's it! Next we will clone the repository and walk through how to change key information to customize it for your own use.

### Step 2: fork this repository
1. 'fork' this repository to your own GitHub account (or to a GitHub organization where you are a collaborator)
    - use the fork button at the top of this page
    - you should now have a copy of this repository and all of its files associated with your own GitHub account
2. publish your forked repository using GitHub pages
    - navigate to your repository's `Settings` tab
    - scroll down to the `GitHub Pages` section
    - select `master branch as the source`
    - a notice will appear that says `Your site is ready to be published at:` then the URL of your new website. After a few minutes, refresh this page and the notice will read `Your site is published at....`. Click on this link to see your new website

### Step 3: change the site name & set up the config.yml file
Currently your repository inherited the name of this CSR template repository that you forked it from: `template_site`. This means that the site's URL from GitHub Pages is also something like `yourgithubusername.github.io/template_site` (see note at the end of the guide about custom URLs) lets change this
1. navigate to the `Settings` of your repository, change the name of the repository to whatever you would like (note it cannot contain any spaces). Moving forward we will refer to it as `your-course-name`
2. as noted above, changing the name of the repository to `your-course-name` will also change the name of the sub-folder that your site is published from (if you scroll down to the `GitHub Pages` section of the `Settings` page you will see that the link to your site has changed). This will cause many of the links of your site to break. But fear not! To fix this we will make changes to the `_config.yml` file
3. navigate to the `_config.yml` file in your repository, open it, and then click the pencil icon to be able to edit the `_config.yml` file in your browser
4. change the `baseurl:` to match the sub-folder that your site is published from. It should be something like `baseurl: "/your-course-name"`. Note formatting here is important, the repository/sub-folder name must be in quotes and there must be a colon immediately after baseurl
5. change other key information about your site. Update the title of your site, author, and description. Note: these do not need to be contained in quotes, the text you put here will appear exactly as you type it in the header and footer of your site's homepage
6. when you are finished editing your `_config.yml` file scroll down to commit your changes (this saves all of the changes you made, and keeps a record of what those changes were)
7. next we need to change the links to images contained in the site's post
8. open the `_posts` folder, and open the `2020-01-01-last-first.md` file, again click on the pencil icon to open up the editor mode.
9. there are two links to images in this post that need to be updated with your new repository/sub-folder name in order to function. Currently both look like `/template_site/images/image-name.png` replace `template_site` with your new repository/sub-folder name
10. commit your changes
11. wait a few minutes, and then navigate to the new link to your GitHub Pages site (you can find it in the `Settings` for your repository) check to see that everything is working.

Now you are ready to start adding your own material to your new website.

### Step 4: site setup for your students
There are a few steps to set up your site so that your students or other collaborators can add material directly to the site
1. ask students to create their own account with GitHub & to send you the username associated with their account.
2. add all students as 'Collaborators' to the repository of your website
    - Navigate to the repository's page on GitHub, click on `Settings` and then `Collaborators & teams`
    - add each of the student GitHub usernames to invite them to be 'collaborators' on the repository
3. add the new url for your published GitHub pages site to the 'about' text for your repository so students and others can easily find it.
4. direct your students to this tutorial to learn how to create a post and upload images    


### Advanced notes:
- GitHub pages supports the use of custom URLs, instructions are available [here](https://help.GitHub.com/en/GitHub/working-with-GitHub-pages/configuring-a-custom-domain-for-your-GitHub-pages-site). If you change this you will likely need to change the base URL in the config.yml file of your site, as well as any links to images and other resources within your posts. These previously would have been '/template_site' or what ever you changed them to when renaming your repository in the steps above.

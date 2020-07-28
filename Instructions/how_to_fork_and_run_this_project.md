# Step by Step Instruction to Fork and Run this Project

### Step 1 - Download and Install the following Applications

We recommend you to download and install the applications in this particular order :

1. [Git](https://github.com/KamalDGRT/SetupStuff/tree/master/Git)
1. [GitHub Desktop](https://github.com/KamalDGRT/SetupStuff/tree/master/GitHub_Desktop)
1. [Microsoft Visual Studio Code](https://github.com/KamalDGRT/SetupStuff/tree/master/Microsoft%20Visual%20Studio%20Code)
1. [Anaconda](https://github.com/KamalDGRT/SetupStuff/tree/master/Anaconda)


We are creating the project using Django. So, for that, I recommend you to install Anaconda by following the steps given [here](https://github.com/KamalDGRT/SetupStuff/tree/master/Anaconda).

We won't be using the Anaconda application by opening it. <br>
Instead, we will just use some of its packages selectively using the Commad Line Interface. _(Command Prompt for Windows, Terminal for Linux)_. <br>

<hr>

### Step 2 - Create a new virtual environment for Django

#### Step 2.1 - Opening Command Prompt

Go to _Start_ menu. <br>
Type _Command Prompt_. <br>
Click and Open _Command Prompt_.<br>

![Cmd](img/01.png)

<br>

<hr>

#### Step 2.2 - Verifying installation of Anaconda

Type the following command in the _Command Prompt_ to check if Anaconda is installed. <br>

        conda -V

![Cmd](img/02.png)

<br>

<hr>

#### Step 2.3 - Listing out the Python environments

Type the following command to know the list of Python environments available in your PC. <br>

        conda info --envs

![Cmd](img/03.png)

<br>

<hr>

#### Step 2.4 - Creating a new virtual environment

The following command creates a new virtual environment with the name bwluDjango with all <br>
the necessary stuff needed for running a basic Django application.<br>

        conda create --name bwluDjango django

> **Note** : There is no need to create a new _environment_ every time you run this project. If you have created it once, then just activate the environment using the following command :
>    `conda activate bwluDjango`
>  and start the server with this command : 
>    `python manage.py runserver`

<br>

![Cmd](img/04.png)


You are free to choose any name for the virtual environment. <br>

After a few seconds you might get something like this. <br>

![Cmd](img/05.png)

<br>

Enter _y_ in the keyboard.  <br>

![Cmd](img/06.png)

<br>

After the packages get installed, you will get something like this.<br>

![Cmd](img/07.png)

<br>

Type this command from before, to see the list of environment. <br>

        conda info --envs

![Cmd](img/08.png)

<br>

<hr>

### Step 3 - Forking the repository

Open the [main](https://github.com/LetsUpgrade/ONLINE-JOB-PORTAL/) repostitory of this project. <br>

Click on _Fork_ which can be found in the top-right corner. <br>

![Cmd](img/09.png)

<br>

> When you click on the _Fork_ a repository what happens is that you get a copy of the repository that you are forking in your GitHub account. The contents of your repository would be the contents of the main repository at the time of _forking_. 

<br>

![Cmd](img/10.png)

<br>

Now you have your copy of the repository. <br>
Let's go ahead and clone it using GitHub Desktop. 

<br>

<hr>

### Step 4 - Cloning the repository

If you are comfortable with performing the basic git commands like push, pull, commit and clone using commands you can go ahead with it. <br>

To make stuff easier for you, we are going with GitHub Desktop. <br>

To know more about how to install and setup the _GitHub Desktop_, click [here](https://github.com/KamalDGRT/SetupStuff/tree/master/GitHub_Desktop).

<br>

#### Step 4.1 - Open *GitHub Desktop*

Open *GitHub Desktop*. <br>

If this is your first time cloning of a repository using *GitHub Desktop*, it would look something like this. <br>

![GitHub](img/11.png)

<br>

<hr>

#### Step 4.2 - Cloning the repository begins

Click on _Clone a repository from the Internet_.<br>

![GitHub](img/12.png)

<br>

<hr>

#### Step 4.3 - Fetching the list of repositories present in the GitHub.com account

Click on _Refresh this list_ or click on the _Sync_ icon.<br>
When you do that, you will see something like this. 

![GitHub](img/13.png)

<br>

<hr>

#### Step 4.4 - Checking the location where the *fork* is to be cloned

Click on your _Forked_ repository. <br>
Notice the *Local path*.<br>
In the last you can see that it has the same name as that of this repository.<br>

![GitHub](img/14.png)

<br>

<hr>

#### Step 4.5 - Changing the location 

Click on that _path_ and change it like how I am doing.<br>
We are doing this because, when you clone this main repository in the folder where you have cloned this repository, there will be a clash.

![GitHub](img/15.png)

<br>

After renaming the destination folder, click on _Clone_ and you will see something like this. 

<br>

![Github](img/16.png)

<br>

![Github](img/17.png)

<br>

<hr>

#### Step 4.6 - Choosing in which repository to contribute

Click on _Contribute to the parent project_.<br>
By default, that option would be selected. <br>
After that click _Continue_.

![GitHub](img/18.png)

<br>

<hr>

#### Step 4.7 - Fetching from GitHub.com

Click on _Fetch Origin_.<br>

![GitHub](img/19.png)

<br>

If you notice there, you can see it fetching the files from GitHub.com to your PC. 

![GitHub](img/20.png)

<br>

<hr>

#### Step 4.8 - Opening the repository in File Explorer

Click on _Show in Explorer_.<br>

![GitHub](img/21.png)

<br>

> When you click on *Show in Explorer*, the GitHub Desktop will open the location where you cloned the repository.

![GitHub](img/22.png)

<hr>

### Step 5 - Execution of the project begins.

#### Step 5.1  - Opening the *Command Prompt* in the cloned location

Now, click on the address bar. 

<br>

![GitHub](img/23.png)

<br>

Type `cmd` in the address bar to open the _Command Prompt_ in that particular folder. <br>

![GitHub](img/24.png)

<br>

![GitHub](img/25.png)

<br>

<hr>

#### Step 5.2 - Listing the virtual environments

Type the following command to see the list of virtual environments. <br>

        conda info --envs

<br>

![GitHub](img/26.png)

<br>

<hr>

#### Step 5.3 - Activating the Virtual Environment

Now, let us activate the virtual environment that we created in ***Step 2.4***. <br>
Enter the following command to activate that environment. <br>

        conda activate bwluDjango

![GitHub](img/27.png)

<br>

You can see that in the _Command Prompt_, we have the *(bwluDjango)* in the front. <br>
This means that we have successfully activated that environment for development. <br>

<hr>

#### Step 5.4 - Moving into the Project Directory

In Windows, as well as Linux, the command to go to a particular directory in CLI *(Command Line Interface)* is ***cd***.

<br>

So, lets get into the *job_portal* folder. <br>

        cd job_portal

<br>

![GitHub](img/28.png)

<br>

<hr>

#### Step 5.5 - Starting up the Django server

The following command starts up the Django development server.<br>

        python manage.py runserver

![GitHub](img/29.png)

<br>

After typing the command and pressing the 'Enter' key in your keyboard, you will be able to see something like this. <br>

![GitHub](img/30.png)

<br>

In the _Command Prompt_, we can see that the *development server is at http://127.0.0.1:8000/*

<br>
<br>

<hr>

#### Step 5.6 - Opening the Address given by the server in a browser

Type the address given in your browser and press enter to see the output. <br>

        http://127.0.0.1:8000/

![GitHub](img/31.png)

<br>

Now, have a look at what is happening at the server. <br>

> By server, here I mean the one we started in the _Command Prompt_. <br>

![GitHub](img/32.png)

<br>

<hr>

#### Step 5.7 - Stopping the server

Click on the _Command Prompt_ that has the Django server running. <br>
Press `Ctrl + C` to stop the server. <br>

![GitHub](img/33.png)

<br>

Now, try refreshing the Django output page in the browser. <br>

![GitHub](img/34.png)

<br>

If you see something like this, then yes. The Django server has been successfully stopped. 

<hr>


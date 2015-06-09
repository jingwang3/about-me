<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#">Project name</a> 
        </div>
      <ul class="nav navbar-nav navbar-right">
        <li id="signedOut"><button id="signInBtn" type="button" class="btn btn-primary navbar-btn">Sign in with Facebook</button></li>
        <li id="signedIn" class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span id="btnText">Sign in </span><span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#" onclick="fbLogout();">Sign out</a></li>
          </ul>
        </li>
      </ul>
        <!--/.navbar-collapse -->
    </div>
</nav>
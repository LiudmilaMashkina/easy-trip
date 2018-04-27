const navBar = `
<div class="main_div">
    <div class="top_nav flexed">
        <span id="logo" style="padding-left: 30px" onclick="openMainPage()">EASYtrip</span>
        <div id="nav-buttons" style="float:right; display: flex; align-items:center">
            <button type="button" id="my_trips_btn" onclick="openMyTrips()">My trips</button>
            <div class="dropdown">
                <button class="dropbtn" onclick="myFunction()">Log in
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content" id="myDropdown">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> 
        </div>
    </div>
</div>
`

const signInForm = `
<form class="form-signin">
    <span>Please, sign in first</span>
    </br></br>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="text" name="username" id="username" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required autocomplete="off">
    <div id="error" class="hide-auth-error">Incorrect Username or Password</div>
    <div class="centered" style="width: 100%; height: 40%">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </div>
</form>
`
{/* <button id="login" type="button">
                Log in
            </button> */}
            
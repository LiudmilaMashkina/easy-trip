const navBar = `
<div class="main_div">
    <div class="top_nav flexed">
        <span id="logo" style="padding-left: 30px">EASYtrip</span>
        <div style="float:right; display: flex; align-items:center">
            <button type="button">
                Search trip
            </button>
            <button type="button">
                My trips
            </button>
            <button type="button">
                Log in
            </button>
        </div>
    </div>
</div>
`

const signInForm = `
<form class="form-signin">
    <span>Please, sign in</span>
    </br></br>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="text" name="username" id="username" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required autocomplete="off">
    <div class="centered" style="width: 100%; height: 40%">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </div>
    <div id="error" class="hide-auth-error">Incorrect Username or Password</div>
</form>
`


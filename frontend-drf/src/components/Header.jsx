import Button from "./Button";

export default function Header () {
    return <>
    <nav className="navbar container pt-3 pb-3 align-items-start">
<a className="navbar-brand text-light" href="">Stock Preiction Portal</a>
<div>
    <Button text="Login" class='btn btn-outline-info'/>
    &nbsp;&nbsp;
    <Button text='Register' class='btn-info'/>
    {/* <a className="btn btn-info" href="">Register</a> */}
</div>
    </nav>
    </>
}
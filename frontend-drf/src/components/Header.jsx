import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header () {
    return <>
    <nav className="navbar container pt-3 pb-3 align-items-start">
<Link className="navbar-brand text-light" to="/">Stock Preiction Portal</Link>
<div>
    <Button text="Login" class='btn btn-outline-info' url='/login'/>
    &nbsp;&nbsp;
    <Button text='Register' class='btn-info' url='/register'/>
    {/* <a className="btn btn-info" href="">Register</a> */}
</div>
    </nav>
    </>
}
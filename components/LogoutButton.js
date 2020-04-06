import Link from "next/link";
import { Button } from "react-bootstrap";
const LogoutButton=(props)=>{
    return(
        <Link href="/logout">
            <div className="ml-2">
                <Button>Logout</Button>
            </div>
        </Link>
    )
}
export default LogoutButton;